const express = require('express')
const router = express.Router()
const admin = require('../firebase')
const openai = require('../openai')
const db = admin.firestore()
const rtdb = admin.database()

router.post('/', async (req, res) => {
  const { uid } = req.body || {}
  if (!uid) return res.status(400).send('uid не указан')

  try {
    // ===== 1. Получаем пользователя =====
    const userDoc = await db.collection('users').doc(uid).get()
    if (!userDoc.exists) return res.status(404).send('User not found')
    const user = userDoc.data()

    const userSkills = user.skills?.join(', ') || 'нет навыков'
    const userAbout = user.aboutPerson || 'нет описания'
    const userType = user.createrIs || 'не указан'
    const userGroup = user.group || 'не указана'

    const userText = `
Имя: ${user.name} ${user.surname || ''}
Тип: ${userType}
Навыки: ${userSkills}
О себе: ${userAbout}
Группа: ${userGroup}
`

    // ===== 2. Берём курсы =====
    const snap = await rtdb.ref('courses').limitToLast(30).once('value')
    const courses = snap.val()
    if (!courses) return res.status(404).send('No courses found')

    let coursesText = ''
    for (let id in courses) {
      const c = courses[id]
      const lessonsInfo = c.lessons
        ? Object.values(c.lessons).slice(0, 5).map(l => l.title).join(', ')
        : 'нет уроков'

      coursesText += `
ID: ${id}
Название: ${c.title || 'Без названия'}
Описание: ${c.about || 'Без описания'}
Дополнительно: ${c.dopInfo || 'нет информации'}
Темы уроков: ${lessonsInfo}
`
    }

    // ===== 3. Запрос к GPT =====
    const gpt = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Ты система рекомендаций образовательных курсов.' },
        {
          role: 'user',
          content: `
Вот данные пользователя:
${userText}

Вот список курсов:
${coursesText}

Выбери 5 самых подходящих курсов для этого пользователя.
Верни ТОЛЬКО массив их ID в формате JSON, например: ["id1","id2","id3","id4","id5"].
Никаких пояснений или текста.
`,
        },
      ],
    })

    // ===== 4. Парсим массив ID =====
    let idsText = gpt.choices[0].message?.content || '[]'
    idsText = idsText.trim().replace(/^[^\[]*/, '').replace(/[^\]]*$/, '')
    let ids = []
    try {
      ids = JSON.parse(idsText)
      if (!Array.isArray(ids)) ids = []
    } catch {
      ids = Object.keys(courses).slice(0, 5)
    }

    // ===== 5. Сохраняем рекомендации в RTDB =====
    await rtdb.ref(`recommendations/${uid}`).set({
      courses: ids,
      updatedAt: Date.now(),
    })

    // ===== 6. Завершаем запрос =====
    res.sendStatus(200)

  } catch (e) {
    console.error('Ошибка на сервере /recommend:', e)
    res.status(500).send(e.message)
  }
})

module.exports = router
