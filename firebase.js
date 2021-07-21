import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBY7mmmOUvTzN4qtxtJIUzPwdXqUDAB3Y",
  authDomain: "aplikasi-demo-clone.firebaseapp.com",
  projectId: "aplikasi-demo-clone",
  storageBucket: "aplikasi-demo-clone.appspot.com",
  messagingSenderId: "602746713314",
  appId: "1:602746713314:web:91dc8ac7bc1af8eeb49abb",
  measurementId: "G-6ZSBT7FEBT",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
