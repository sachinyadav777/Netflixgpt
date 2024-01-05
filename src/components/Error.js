
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Somthing Went wrong!!</h2>
            <h3>{error.status}: {error.statusText}</h3>
        </div>
    )
}
export default Error;