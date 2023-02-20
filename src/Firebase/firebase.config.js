import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm4qMNm1W08nTJVQeBdM24obA-XxVExk8",
  authDomain: "todo-app-1b189.firebaseapp.com",
  projectId: "todo-app-1b189",
  storageBucket: "todo-app-1b189.appspot.com",
  messagingSenderId: "167138688905",
  appId: "1:167138688905:web:b518c07f0c2f88131bab58",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
