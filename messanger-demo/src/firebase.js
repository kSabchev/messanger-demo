import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_x0GefoHEq10FZoaxe_RQbVAhrpmYDQE",
    authDomain: "messanger-demo-9de69.firebaseapp.com",
    databaseURL: "https://messanger-demo-9de69.firebaseio.com",
    projectId: "messanger-demo-9de69",
    storageBucket: "messanger-demo-9de69.appspot.com",
    messagingSenderId: "840763705381",
    appId: "1:840763705381:web:e599075e4c1eceeda457cc",
    measurementId: "G-D0KS9BS7QK"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const firestore = firebase.firestore();

export {
        // firebaseApp as firebase,
        db,
        auth,
        firestore
}
