import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaAdE_SXol-wSKHWz4a7yFVRCZqURpFVg",
  authDomain: "chatbox-25e84.firebaseapp.com",
  databaseURL: "https://chatbox-25e84-default-rtdb.firebaseio.com",
  projectId: "chatbox-25e84",
  storageBucket: "chatbox-25e84.appspot.com",
  messagingSenderId: "602668839748",
  appId: "1:602668839748:web:9972f03ac33e0475cb9d11",
  measurementId: "G-LW8RR9BRQW"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);