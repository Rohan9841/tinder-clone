import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDFN6bkygttULa6o0wtI4YwpLn8zvPkLAk",
    authDomain: "tinder-clone-5facd.firebaseapp.com",
    projectId: "tinder-clone-5facd",
    storageBucket: "tinder-clone-5facd.appspot.com",
    messagingSenderId: "1848059287",
    appId: "1:1848059287:web:16a803d0eea3c8bf8dd0d2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;