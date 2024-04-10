import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiMttzkVXP9nRFOFwTSRM0P6r3SQzL2Bg",
  authDomain: "grahakconnectbot.firebaseapp.com",
  projectId: "grahakconnectbot",
  storageBucket: "grahakconnectbot.appspot.com",
  messagingSenderId: "426727710801",
  appId: "1:426727710801:web:f4d11133f246593c139870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };