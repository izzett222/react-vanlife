import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError()
    return <div className="px-[26px]">
        <h1 className="text-3xl font-bold  mt-10">server failed with error: {error.message}. Please try again later</h1>
        <pre>{error.status} - {error.statusText}</pre>
    </div>
}