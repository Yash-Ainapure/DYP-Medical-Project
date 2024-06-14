// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyA7-JR3k4l6wQSheMByLD-jlEq8RbSjjvE",
   authDomain: "dypmedicalproject.firebaseapp.com",
   projectId: "dypmedicalproject",
   storageBucket: "dypmedicalproject.appspot.com",
   messagingSenderId: "329198635799",
   appId: "1:329198635799:web:55db833f14dfb754de0552",
   measurementId: "G-VPRJNHM512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);

const database = getDatabase(app)

export { database, signOut };
export const auth = getAuth(app);
export default app;