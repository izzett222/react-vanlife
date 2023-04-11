import { useOutletContext } from "react-router-dom";
import { requireAuth } from "../../utils";

export const loader = async ({ request }) => {
    const { pathname } = new URL(request.url)
    await requireAuth(pathname)
    return null

  }

export default function HostVanPhotos() {
    const { van } = useOutletContext()
    return (
        <img src={van.imageUrl} alt="" className="rounded-md w-[100px] aspect-square" />
    )
}
