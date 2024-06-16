// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: import.meta.env.VITE_APP_API_KEY,
   authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
   projectId: import.meta.env.VITE_APP_PROJECT_ID,
   storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
   messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
   appId: import.meta.env.VITE_APP_APP_ID,
   measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);

const database = getDatabase(app)
const storage = getStorage(app);

export { database, signOut, storage };
export const auth = getAuth(app);
export default app;