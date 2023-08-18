/* eslint-disable no-unused-vars */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref, uploadBytes } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgRBceZWP1FAVeSKQ4y-hBZl1aezzqf74",
  authDomain: "olx-project-45010.firebaseapp.com",
  projectId: "olx-project-45010",
  storageBucket: "olx-project-45010.appspot.com",
  messagingSenderId: "618236406799",
  appId: "1:618236406799:web:3f6a19c510e03bfe14077a",
  measurementId: "G-7PNJM8PMCE"
  };
  export default firebase.initializeApp(firebaseConfig);

// export default firebase.initializeApp(firebaseConfig)