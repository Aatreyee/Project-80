import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBdiBf3NPVCQtTmmwmlKkMa0EnIWjTBjaw",
    authDomain: "book-santa-eb065.firebaseapp.com",
    projectId: "book-santa-eb065",
    storageBucket: "book-santa-eb065.appspot.com",
    messagingSenderId: "151538487100",
    appId: "1:151538487100:web:a110c505bbe1bd62205839"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();