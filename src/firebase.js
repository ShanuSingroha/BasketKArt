
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsNudsnc9MjfWLY6-Y_YZeOpaY0e9WbHA",
  authDomain: "basketkart-9e5e2.firebaseapp.com",
  projectId: "basketkart-9e5e2",
  storageBucket: "basketkart-9e5e2.appspot.com",
  messagingSenderId: "545127307666",
  appId: "1:545127307666:web:a375355436a89b4783c94b",
  measurementId: "G-W4NVK1GGE1"
};

const App = initializeApp(firebaseConfig);
const db = getFirestore(App);
const auth = getAuth();
export { db , auth};
