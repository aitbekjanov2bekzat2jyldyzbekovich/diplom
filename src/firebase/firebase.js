import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCVeEhu0iQhAVZ4Srj4opNx9S_a-bakC0I',
  authDomain: 'diplomawork-99223.firebaseapp.com',
  databaseURL: 'https://diplomawork-99223-default-rtdb.firebaseio.com',
  projectId: 'diplomawork-99223',
  storageBucket: 'diplomawork-99223.firebasestorage.app',
  messagingSenderId: '149210770835',
  appId: '1:149210770835:web:6e376a8bd2c1c3a2e18c66',
  measurementId: 'G-30J7JGHTQD',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const fdb = getFirestore(app)
export { app, auth, fdb }
