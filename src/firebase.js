// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDzG_jLVegNm4hDbQSeje3n2HbN49i-ydQ",
  authDomain: "fb-clone-1-9bacb.firebaseapp.com",
  projectId: "fb-clone-1-9bacb",
  storageBucket: "fb-clone-1-9bacb.appspot.com",
  messagingSenderId: "503807740127",
  appId: "1:503807740127:web:b105421237b47b9929c16a",
  measurementId: "G-EX3JRGSE2H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
