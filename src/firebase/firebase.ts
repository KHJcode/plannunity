import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  apiKey: "AIzaSyA0pXKpMDeN_golEyyc5I6hPFKzhXU23cw",
  authDomain: "plannunity.firebaseapp.com",
  projectId: "plannunity",
  storageBucket: "plannunity.appspot.com",
  messagingSenderId: "724198121491",
  appId: "1:724198121491:web:d49dcddc05406ed213dfe6",
  measurementId: "G-Z4CTR3K96G",
});
export const database = getFirestore(app);
