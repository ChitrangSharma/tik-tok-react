import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAy3CHlkrlxkaMF6J75pHAs6XxqVnU0JxI",
  authDomain: "tik-tok-clone-524c7.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-524c7.firebaseio.com",
  projectId: "tik-tok-clone-524c7",
  storageBucket: "tik-tok-clone-524c7.appspot.com",
  messagingSenderId: "661367790775",
  appId: "1:661367790775:web:41a17248c229d4db204132",
  measurementId: "G-KSH3P0ZHPB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
