// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzr9YgkhCuCwxOJVeNQiTQbEhz_DFCemc",
  authDomain: "link-shortner-7d259.firebaseapp.com",
  projectId: "link-shortner-7d259",
  storageBucket: "link-shortner-7d259.appspot.com",
  messagingSenderId: "941914157314",
  appId: "1:941914157314:web:cc06695bca5e013376921b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)
export  {app,fireDb,storage,auth}