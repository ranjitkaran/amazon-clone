import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsQtYiRW2Y-MJd5EZWBfbUnFmJcC5OjwM",
    authDomain: "e-commerce-website-proj-sem6.firebaseapp.com",
    projectId: "e-commerce-website-proj-sem6",
    storageBucket: "e-commerce-website-proj-sem6.appspot.com",
    messagingSenderId: "1000892684782",
    appId: "1:1000892684782:web:40fd6fb335487d1e5d16ff",
    measurementId: "G-ZDW2FS76W8"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
