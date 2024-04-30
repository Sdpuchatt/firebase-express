//const firebase = require('firebase')
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB1R5PLlthDee1lSLN14hAQvRPdXQ6sV48",
    authDomain: "probando-firebase-node.firebaseapp.com",
    projectId: "probando-firebase-node",
    storageBucket: "probando-firebase-node.appspot.com",
    messagingSenderId: "500151328951",
    appId: "1:500151328951:web:5c70b3023fba9d007cad32",
    measurementId: "G-MWZVHTPVFB"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  export {db}