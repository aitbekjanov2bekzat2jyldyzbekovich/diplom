const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccount.json.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://diplomawork-99223-default-rtdb.firebaseio.com',
})

module.exports = admin
