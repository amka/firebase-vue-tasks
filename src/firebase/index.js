import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyASIYQ7Wz0aDb4NJ8iL9e5dvMYqpUEKrAA',
  authDomain: 'lucky-lemur.firebaseapp.com',
  databaseURL: 'https://lucky-lemur.firebaseio.com',
  projectId: 'lucky-lemur',
  storageBucket: 'lucky-lemur.appspot.com',
  messagingSenderId: '699573023394'
}

// Initialize Connection
firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore()

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
})

export {
  db
}
