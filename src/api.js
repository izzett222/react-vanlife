export async function getVans() {
    const res = await fetch("/api/vans")
    if (!res.ok) {
         // eslint-disable-next-line no-throw-literal
         throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status,
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getVan(id) {
    const res = await fetch(`/api/vans/${id}`)
    if (!res.ok) {
         // eslint-disable-next-line no-throw-literal
         throw {
            message: "Van not found",
            statusText: res.statusText,
            status: res.status,
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans() {
    const res = await fetch("/api/host/vans")
    if (!res.ok) {
         // eslint-disable-next-line no-throw-literal
         throw {
            message: "Failed to fetch host vans",
            statusText: res.statusText,
            status: res.status,
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVan(id) {
    const res = await fetch(`/api/host/vans/${id}`)
    if (!res.ok) {
         // eslint-disable-next-line no-throw-literal
         throw {
            message: "Host van not found",
            statusText: res.statusText,
            status: res.status,
        }
    }
    const data = await res.json()
    return data.vans
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

