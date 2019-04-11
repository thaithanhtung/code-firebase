import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDIbuT8m9PtVOKtRzscl8t_AXl3ItwjMj8",
  authDomain: "fir-firebase-26-3.firebaseapp.com",
  databaseURL: "https://fir-firebase-26-3.firebaseio.com",
  projectId: "fir-firebase-26-3",
  storageBucket: "fir-firebase-26-3.appspot.com",
  messagingSenderId: "568107854634"
};
firebase.initializeApp(config);

export default firebase;
