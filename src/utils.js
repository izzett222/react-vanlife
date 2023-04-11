import { redirect } from "react-router-dom";

export async function requireAuth(pathname) {
    const isLogged = JSON.parse(localStorage.getItem("loggedIn"))
    if (!isLogged) {
        console.log("I got here")
        const message = encodeURI("You must login first")
        const previousLocation = encodeURI(pathname)
        throw redirect(`/login?message=${message}${pathname ? `&previousLocation=${previousLocation}` : ''}`)
    }
}