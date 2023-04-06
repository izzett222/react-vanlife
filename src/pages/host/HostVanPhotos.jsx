import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const { van } = useOutletContext()
    return (
        <img src={van.imageUrl} alt="" className="rounded-md w-[100px] aspect-square" />
    )
}