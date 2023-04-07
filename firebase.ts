// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCWtjMVqyo7aeWfiuGtq4uzyIXYC1BjgY",
  authDomain: "netflix-clone-2f601.firebaseapp.com",
  projectId: "netflix-clone-2f601",
  storageBucket: "netflix-clone-2f601.appspot.com",
  messagingSenderId: "363058210641",
  appId: "1:363058210641:web:0d7c98c1d38de30632d570"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }