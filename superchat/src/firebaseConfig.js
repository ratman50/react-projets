import { initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
   apiKey: "AIzaSyDv20yjItLnyCwZuuYiis265OkTNyW7Kkg",

  authDomain: "chatwithreact-c5ce3.firebaseapp.com",

  projectId: "chatwithreact-c5ce3",

  storageBucket: "chatwithreact-c5ce3.appspot.com",

  messagingSenderId: "690634208206",

  appId: "1:690634208206:web:6d4178320f5ad6be24b19f",

  measurementId: "G-EJYGK034P4"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
