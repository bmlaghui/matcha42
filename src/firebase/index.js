import { getAuth } from 'firebase/auth';
import { getFirestore, doc as firestoreDoc, updateDoc as firestoreUpdateDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAHVSMrIeymA40C-a9ap0zCQzrHXkycXX8",
  authDomain: "matcha-42-bhamdi-mbouzaie.firebaseapp.com",
  projectId: "matcha-42-bhamdi-mbouzaie",
  storageBucket: "matcha-42-bhamdi-mbouzaie.appspot.com",
  messagingSenderId: "636494596795",
  appId: "1:636494596795:web:646e33b3c451b90704b79e",
  measurementId: "G-RQKDK4M6RT"
};
/*
const firebaseConfig = {
  apiKey: "my-apiKey",
  authDomain: "matcha-42-bhamdi-mbouzaie.firebaseapp.com",
  projectId: "matcha-42-bhamdi-mbouzaie",
  storageBucket: "matcha-42-bhamdi-mbouzaie.appspot.com",
  messagingSenderId: "my-messagingSenderId",
  appId: "my-appId",
  measurementId: "my-measurementId"
};*/

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const doc = (uid) => firestoreDoc(db, 'users', uid);
const updateDoc = (docRef, data) => firestoreUpdateDoc(docRef, data);

export { app, auth, db, storage, doc, updateDoc };