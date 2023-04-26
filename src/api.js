import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite"
import db from "./firebase";
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
