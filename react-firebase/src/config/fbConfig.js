import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var config = {
  apiKey: "AIzaSyAEIUyImrq7ZHB-NyjC65BPINVPkRQPcM4",
  authDomain: "react-wed-firebase.firebaseapp.com",
  databaseURL: "https://react-wed-firebase.firebaseio.com",
  projectId: "react-wed-firebase",
  storageBucket: "",
  messagingSenderId: "1070467501935"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
