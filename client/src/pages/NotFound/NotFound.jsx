import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full h-screen grid place-content-center">
            <div className="space-y-5 flex flex-col justify-center">
                <p className='flex items-center flex-col sm:flex-row sm:space-x-4 text-xl font-semibold text-slate-500'>
                    <span className="text-2xl sm:text-xl">404</span>
                    <span className="hidden sm:inline-block">|</span>
                    <span>This page could not be found</span>
                </p>
                <button 
                    className="uppercase text-slate-500 hover:bg-slate-200 font-semibold border mx-auto px-4 py-1.5 rounded"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default NotFound;