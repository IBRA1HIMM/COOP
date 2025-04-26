// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyANVkEG0zVD_GOHPqOdGjylDR8SwVcbY8E",
  authDomain: "coop-d6084.firebaseapp.com",
  projectId: "coop-d6084",
  storageBucket: "coop-d6084.firebasestorage.app",
  messagingSenderId: "598758181913",
  appId: "1:598758181913:web:9cd204a06443d9c5052e88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
