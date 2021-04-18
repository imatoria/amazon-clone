import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjZ9X4zT6nq4-bGtIHBj57N9u16KP5ETk",
  authDomain: "clone-a7dd5.firebaseapp.com",
  projectId: "clone-a7dd5",
  storageBucket: "clone-a7dd5.appspot.com",
  messagingSenderId: "795728955753",
  appId: "1:795728955753:web:b320d1ce1479fde21695f8",
  measurementId: "G-Q89JND02HH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
