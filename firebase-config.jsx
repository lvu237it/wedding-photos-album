// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP7zmr1FbsqV8QMuQeW8VIRPf5Wv_valE",
  authDomain: "wedding-photos-album.firebaseapp.com",
  projectId: "wedding-photos-album",
  storageBucket: "wedding-photos-album.appspot.com",
  messagingSenderId: "548291007321",
  appId: "1:548291007321:web:7c109140de51f3d1a4b248",
  measurementId: "G-NKED4BYBQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);