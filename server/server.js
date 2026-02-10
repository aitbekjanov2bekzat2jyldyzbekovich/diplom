const express = require('express')

require('./deleteExpiredCourses')

const app = express()

app.get('/', (req, res) => {
  res.send('Server working. Роут /recommend работает!')
})

app.listen(3001, () => {
  console.log('Server started on http://localhost:3001')
})
