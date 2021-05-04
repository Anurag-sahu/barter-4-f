import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDRHQ1gSHRLRx2PDK57YXVXLrKLdlfe6n4",
    authDomain: "barter-pro.firebaseapp.com",
    projectId: "barter-pro",
    storageBucket: "barter-pro.appspot.com",
    messagingSenderId: "807612861076",
    appId: "1:807612861076:web:9f9393e145d197d75fc281"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();