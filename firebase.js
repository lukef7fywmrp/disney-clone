import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAH2KoSYHoFOZtDT_jgyvoRKCeLh8eZ0FI",
  authDomain: "disneyplus-build.firebaseapp.com",
  projectId: "disneyplus-build",
  storageBucket: "disneyplus-build.appspot.com",
  messagingSenderId: "224556056073",
  appId: "1:224556056073:web:cd2a48337df738c55b82d8",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
