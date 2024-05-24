import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDaAdE_SXol-wSKHWz4a7yFVRCZqURpFVg",
    authDomain: "chatbox-25e84.firebaseapp.com",
    projectId: "chatbox-25e84",
    storageBucket: "chatbox-25e84.appspot.com",
    messagingSenderId: "602668839748",
    appId: "1:602668839748:web:fac406ef97431326cb9d11",
    measurementId: "G-G5Y92ZX8MH"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);