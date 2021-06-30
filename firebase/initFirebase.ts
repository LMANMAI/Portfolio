import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUXhpOCK-xqZzs0OVSW0JnMNuv-bAccgc",
  authDomain: "portfoliodb-b259d.firebaseapp.com",
  projectId: "portfoliodb-b259d",
  storageBucket: "portfoliodb-b259d.appspot.com",
  messagingSenderId: "768514011130",
  appId: "1:768514011130:web:7243fe791009487fe77e43",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase was succesfully loaded");
}
const firestore = firebase.firestore();
export { firestore };
