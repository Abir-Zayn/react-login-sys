// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc9ko2rBkM9aC8Ysj7Fd0tC_e7bWDMgYg",
  authDomain: "react-project-api-login.firebaseapp.com",
  projectId: "react-project-api-login",
  storageBucket: "react-project-api-login.appspot.com",
  messagingSenderId: "697874937453",
  appId: "1:697874937453:web:14f526e3b1f10d5e6ef164",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
