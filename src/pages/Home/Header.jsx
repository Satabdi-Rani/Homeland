import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container mx-auto lg:px-10 xl:px-0 mt-8 bg-[rgba(244, 233, 219, 0.332)]">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to='/' className="text-4xl font-bold">Homeland</Link>
                </div>

                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to=''>Home</Link>
                        <Link to=''>About</Link>
                        <Link to=''>Facilities</Link>
                        <Link to=''>Contact</Link>
                    </ul>
                </div>
                <ul className="md:flex md:flex-row gap-4 text-lg font-semibold hidden ">
                    <Link to=''>Home</Link>
                    <Link to=''>About</Link>
                    <Link to=''>Facilities</Link>
                    <Link to=''>Contact</Link>
                </ul>

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