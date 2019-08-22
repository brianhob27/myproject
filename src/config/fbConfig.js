import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyATX2zrfLZBx2k4O30EBYG5eXBTmNLKXqM",
  authDomain: "myproject-c88ac.firebaseapp.com",
  databaseURL: "https://myproject-c88ac.firebaseio.com",
  projectId: "myproject-c88ac",
  storageBucket: "",
  messagingSenderId: "612501503529",
  appId: "1:612501503529:web:7f3b1441591c5d3e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
