import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/messaging'
import 'firebase/functions'

const config = {
    apiKey: "AIzaSyD1KCxFbgUFB2ET3vvkMfEsOJ8SmF99skQ",
    authDomain: "dh-expensify.firebaseapp.com",
    databaseURL: "https://dh-expensify.firebaseio.com",
    projectId: "dh-expensify",
    storageBucket: "dh-expensify.appspot.com",
    messagingSenderId: "175134270302"
}

firebase.initializeApp(config)

firebase.database().ref().set({
    name: 'Delowar Hossain',
    age: 23,
    dest: 'Dev'
})