
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCJxLRwQeTqgLZ0xXq0rvTSP-FC-lYgslo",
  authDomain: "vanlife-4f1f0.firebaseapp.com",
  projectId: "vanlife-4f1f0",
  storageBucket: "vanlife-4f1f0.appspot.com",
  messagingSenderId: "1032359331375",
  appId: "1:1032359331375:web:00c996dd5dae8b686a68da"
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
