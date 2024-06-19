import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-5xl font-bold ">Page <span className="text-red-500">Not Found!</span></h1>
            <p className="mt-8 text-xl sm:text-2xl">Sorry, an unexpected error has occurred.</p>
        </div>
    );
};

export default Error;