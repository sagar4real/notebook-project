 import firebase from'firebase'
 import firestore from'firebase/firestore'
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyATNjp7t9aVZkU7zV0wLfvKZdx90XkTpao",
    authDomain: "note-5bd2e.firebaseapp.com",
    projectId: "note-5bd2e",
    storageBucket: "note-5bd2e.appspot.com",
    messagingSenderId: "844705913329",
    appId: "1:844705913329:web:f66dc18fbd45a9759c0c50",
    measurementId: "G-9ES9MEW6XZ"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebaseApp.firestore().settings({timestampsInSnapshots: true})
//   exporting firebase database
export default firebaseApp.firestore();