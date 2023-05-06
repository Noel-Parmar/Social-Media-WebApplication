import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfg8H-pVXZl54Xy-qntbx47gVcFAK6HfY",
  authDomain: "bagga-58cf1.firebaseapp.com",
  projectId: "bagga-58cf1",
  storageBucket: "bagga-58cf1.appspot.com",
  messagingSenderId: "75150488123",
  appId: "1:75150488123:web:92b7f513412d7774f2e21e"
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
//const analytics = getAnalytics(firebaseApp);
export{db,auth,firebaseApp,storage};
