import { useOutletContext } from "react-router-dom"
import { requireAuth } from "../../utils"

export const loader = async ({ request }) => {
    const { pathname } = new URL(request.url)
    await requireAuth(pathname)
    return null
  }

export default function HostVanPricing() {
    const { van } = useOutletContext()
    return <div>
        <p><span className="text-dark text-2xl font-medium">${van.price}</span>/day</p>
    </div>
}
