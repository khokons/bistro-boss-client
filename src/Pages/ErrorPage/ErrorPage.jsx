import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center uppercase">
            <h2 className="text-red-600 text-4xl mb-4">I have no data</h2>
            <button className="btn btn-link">
                <Link to='/' className="text-lg uppercase">Home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;
