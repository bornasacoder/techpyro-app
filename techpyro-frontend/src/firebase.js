import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1RAoKnekP2CV_cevlLhjfTFS2Io9eCH0",
  authDomain: "verify-16631.firebaseapp.com",
  projectId: "verify-16631",
  storageBucket: "verify-16631.appspot.com",
  messagingSenderId: "271332326174",
  appId: "1:271332326174:web:f9e14053c0f714f5fda70f",
  measurementId: "G-B8G3QK1142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;