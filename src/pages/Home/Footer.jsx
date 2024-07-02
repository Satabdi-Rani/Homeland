import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className=" bg-[#26282B]">
            <div className="container mx-auto">
            <div className="lg:mx-12 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-white pt-16 pb-12">
                <div className="w-3/4 sm:w-[80%] mx-auto md:w-full md:ml-8 lg:ml-0 col-span-4 sm:col-span-1">
                    <h2 className="text-3xl text-yellow-400 font-bold">Homeland</h2>
                    <h3 className="text-lg leading-5 pt-3">By aiming to take the life quality to an upper level with the whole realized Projects, Homeland continues to be the address of luxury.</h3>
                </div>
                <ul className="flex flex-col justify-center mx-auto gap-2 text-lg col-span-2 sm:col-span-1 mt-6 mb-4 sm:mt-0 sm:mb-0">
                    <Link to="">Home</Link>
                    <Link to="">About</Link>
                    <Link to="">Facilities</Link>
                    <Link to="">Contact Us</Link>
                </ul>
                <ul className="flex flex-col justify-center sm:ml-10 md:mx-auto gap-2 text-lg col-span-2 sm:col-span-1 mt-6 mb-4 sm:mt-6 md:mt-0 sm:mb-0">
                    <li>Suites</li>
                    <li>Apartments</li>
                    <li>Butique Room</li>
                    <li>Buildings</li>
                </ul>
                <div className="text-left ml-16 sm:ml-0  mt-4 sm:mt-6 md:mt-0 sm:text-left md:text-right col-span-4 sm:col-span-1">
                    <h5 className="text-2xl font-bold">+380(98)298-59-73</h5>
                    <h6 className="text-md sm:ml-5 md:ml-0 lg:ml-0">info@homeland.com.bd</h6>
                    <ul className="flex flex-row gap-4 text-lg mt-6 sm:mt-10 sm:ml-6 md: lg:ml-40">
                        <li className="border p-1"><a href="www.facebook.com"><FaFacebookF /></a></li>
                        <li className="border p-1"><a href="www.facebook.com"><FaTwitter /></a></li>
                        <li className="border p-1"><a href="www.facebook.com"><FaLinkedin /></a></li>
                        <li className="border p-1"><a href="www.facebook.com"><FaYoutube /></a></li>
                    </ul>
                </div>

            </div>
            
            <hr />
            <div>
                <h6 className="text-center text-white py-8">© 2024 Homeland - All rights reserved</h6>
            
            </div>
            </div>
            
        </div>
    );
};

export default Footer;