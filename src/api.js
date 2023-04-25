
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite"
const apiKey = process.env.REACT_APP_API_KEY
const authDomain = process.env.REACT_APP_AUTH_DOMAIN
const projectId = process.env.REACT_APP_PROJECT_ID
const storageBucket = process.env.REACT_APP_STORAGE_BUCKET
const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID
const appId = process.env.REACT_APP_APP_ID
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
const vansCollection = collection(db, 'vans')



export async function getVans() {
    const vansSnapshot = await getDocs(vansCollection)
    const vansArray = vansSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    return vansArray
}

export async function getVan(id) {
    const docRef = doc(db, 'vans', id)
    const vanSnapshot = await getDoc(docRef)
    return { ...vanSnapshot.data(), id: vanSnapshot.id}
}

export async function getHostVans() {
    const hostQuery = query(vansCollection, where("hostId", '==', "9m852RZBS35a1kfKwFLV"))
    const vansSnapshot = await getDocs(hostQuery)
    const vansArray = vansSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    return vansArray
}

export async function getHostVan(id) {
    const docRef = doc(db, 'vans', id)
    const vanSnapshot = await getDoc(docRef)
    return { ...vanSnapshot.data(), id: vanSnapshot.id}
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()
    console.log(data, '=========')

    if (!res.ok) {
        // eslint-disable-next-line no-throw-literal
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
