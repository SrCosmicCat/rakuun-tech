import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCkMERamNmhxAUu3YaBA7gsWQTeB90T1XA",
  authDomain: "rakuun-tech.firebaseapp.com",
  databaseURL: "https://rakuun-tech-default-rtdb.firebaseio.com",
  projectId: "rakuun-tech",
  storageBucket: "rakuun-tech.appspot.com",
  messagingSenderId: "956698162720",
  appId: "1:956698162720:web:cce8bf4fb40fe83c5bae45",
  measurementId: "G-EZFQE7433L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const messaging = getMessaging(app);
const db = getFirestore(app);

export { auth, messaging, db };