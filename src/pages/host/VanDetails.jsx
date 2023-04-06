import { useOutletContext } from "react-router-dom";

export default function VanDetails() {
  const { van } = useOutletContext();
  return (
    <div>
      <p className="text-sm mb-3">
        <span className="font-bold">Name: </span>
        {van.name}
      </p>
      <p className="text-sm mb-3">
        <span className="font-bold">Category: </span>
        {van.type}
      </p>
      
      <p className="text-sm mb-3"><span className="font-bold">Description: </span>{van.description}</p>
      <p><span className="font-bold">Visibility: </span>Public</p>
    </div>
  );
}
