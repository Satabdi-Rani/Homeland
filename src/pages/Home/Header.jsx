import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container mx-auto mt-8 bg-[rgba(244, 233, 219, 0.332)]">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to='/' className="text-4xl font-bold">Homeland</Link>
                </div>
                <div className="navbar-end flex flex-row gap-5 ">
                    <Link to='/login'>
                       <button className="btn hover:bg-yellow-400 text-lg hover:text-[#262626] bg-[#160d0dc0] shadow-xl text-yellow-400 px-6 border-none rounded-xl py-2 mt-4">Login</button>
                    </Link>
                    <Link to='/register'>
                       <button className="btn hover:bg-yellow-400 text-lg hover:text-[#262626] bg-[#160d0dc0] shadow-xl text-yellow-400 px-6 border-none rounded-xl py-2 mt-4">Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;