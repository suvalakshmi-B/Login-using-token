// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDmiId4vTTCIieVDYLsiO3k6w6kcJPVxkg",
//   authDomain: "fir-auth-42279.firebaseapp.com",
//   projectId: "fir-auth-42279",
//   storageBucket: "fir-auth-42279.appspot.com",
//   messagingSenderId: "682674674116",
//   appId: "1:682674674116:web:2b5de10b959badd3552c91",
//   measurementId: "G-EZJ5WS3GHR",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth();

// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmiId4vTTCIieVDYLsiO3k6w6kcJPVxkg",
  authDomain: "fir-auth-42279.firebaseapp.com",
  projectId: "fir-auth-42279",
  storageBucket: "fir-auth-42279.appspot.com",
  messagingSenderId: "682674674116",
  appId: "1:682674674116:web:6740b52b225c1e27552c91",
  measurementId: "G-4Y25CVZ9WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app