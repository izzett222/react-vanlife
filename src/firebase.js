import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"


const { 
    REACT_APP_API_KEY: apiKey,
    REACT_APP_AUTH_DOMAIN: authDomain,
    REACT_APP_PROJECT_ID: projectId,
    REACT_APP_STORAGE_BUCKET: storageBucket,
    REACT_APP_MESSAGING_SENDER_ID: messagingSenderId,
    REACT_APP_APP_ID: appId
} = process.env

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;