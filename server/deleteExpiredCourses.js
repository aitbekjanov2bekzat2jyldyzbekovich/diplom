const cron = require('node-cron')
const admin = require('./firebase')

const db = admin.database()

cron.schedule('*/10 * * * *', async () => {
  const now = Date.now()
  console.log('Checking expired courses...')

  const snapshot = await db.ref('courses').once('value')
  if (!snapshot.exists()) return

  const updates = {}

  snapshot.forEach((child) => {
    const course = child.val()

    if (course.endCourse && course.endCourse < now) {
      updates[child.key] = null
      console.log('Deleting:', child.key)
    }
  })

  if (Object.keys(updates).length) {
    await db.ref('courses').update(updates)
    console.log('Deleted expired courses')
  }
})
