const express = require('express')
const cors = require('cors')
require('./deleteExpiredCourses')

const recommendRoute = require('./routes/recommend')

const app = express()

// 🟢 важно для POST JSON
app.use(express.json())

app.use(cors())
app.use('/recommend', recommendRoute)

app.get('/', (req, res) => {
  res.send('Server working. Роут /recommend работает!')
})

app.listen(3001, () => {
  console.log('Server started on http://localhost:3001')
})
