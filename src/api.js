
export async function getVans() {
    const res = await fetch("/api/vans")
    if (!res.ok) {
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
         throw {
            message: "Van not found",
            statusText: res.statusText,
            status: res.status,
        }
    }
    const data = await res.json()
    return data.vans
}