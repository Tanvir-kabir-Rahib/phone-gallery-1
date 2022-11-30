// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWp8m1MPQeihKcYL1fWdcCuMGnvn8CBZk",
  authDomain: "phone-gallery-f2b9c.firebaseapp.com",
  projectId: "phone-gallery-f2b9c",
  storageBucket: "phone-gallery-f2b9c.appspot.com",
  messagingSenderId: "501627350243",
  appId: "1:501627350243:web:dc46a056d6bdfdc46369d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;