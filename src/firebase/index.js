import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyASIYQ7Wz0aDb4NJ8iL9e5dvMYqpUEKrAA',
  authDomain: 'lucky-lemur.firebaseapp.com',
  databaseURL: 'https://lucky-lemur.firebaseio.com',
  projectId: 'lucky-lemur',
  storageBucket: 'lucky-lemur.appspot.com',
  messagingSenderId: '699573023394'
}

firebase.initializeApp(config)
