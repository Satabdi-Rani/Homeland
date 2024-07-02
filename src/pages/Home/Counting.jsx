import { FaBuilding, FaKey, FaTrainSubway } from "react-icons/fa6";
import { MdSpaceBar } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Counting = () => { 

    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

    return (
        <div className="bg-[#F9F9F9]">
            <div className="container mx-auto mt-32 mb-32 pb-32 pt-24">
                <div className="flex flex-col items-center ">
                    <h3 className="text-yellow-800 text-xl sm:text-2xl md:text-3xl font-semibold">Homeland <span className="text-black">Property</span> </h3>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 mb-20">All Decorated Flats in Newyork</h2>
                </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
                        <div className="flex flex-col items-center">
                            <FaTrainSubway className="text-3xl sm:text-5xl " />
                            <h3 className="text-sm sm:text-md font-bold mt-4" >Near to Subway</h3>
                            <h4 data-aos="zoom-in-up" className="font-bold mt-2"><span className="text-2xl sm:text-5xl">28</span> <span className="text-md">min</span></h4>
                        </div>
                        <div className="flex flex-col items-center">
                            <MdSpaceBar className="text-3xl sm:text-5xl" />
                            <h3 className="text-sm sm:text-md font-bold mt-4">Spaces in Homeland</h3>
                            <h4 data-aos="zoom-in-up" className="font-bold mt-2"><span className="text-2xl sm:text-5xl">32</span> <span className="text-md">+</span></h4>
                        </div>
                        <div className="flex flex-col items-center mt-8 sm:mt-0">
                            <FaKey className="text-3xl sm:text-5xl" />
                            <h3 className="text-sm sm:text-md font-bold mt-4">Key Delivery</h3>
                            <h4 data-aos="zoom-in-up" className="font-bold mt-2"><span className="text-2xl sm:text-5xl">25</span> <span className="text-md">%</span></h4>
                        </div>
                        <div className="flex flex-col items-center mt-8 sm:mt-8 md:mt-0">
                            <RiBuilding2Line className="text-3xl sm:text-5xl" />
                            <h3 className="text-sm sm:text-md font-bold mt-4">Clean Structure</h3>
                            <h4 data-aos="zoom-in-up" className="font-bold mt-2"><span className="text-2xl sm:text-5xl">3</span> <span className="text-md">years</span></h4>
                        </div>
                        <div className="flex flex-col items-center mt-8 sm:mt-8 md:mt-0">
                            <FaBuilding className="text-3xl sm:text-5xl" />
                            <h3 className="text-sm sm:text-md font-bold mt-4">Size of flat</h3>
                            <h4 data-aos="zoom-in-up" className="font-bold mt-2"><span className="text-2xl sm:text-5xl">89</span> <span className="text-md">m <sup>2</sup></span></h4>
                        </div>
                        

                    
                </div>
            </div>
        </div>
    );
};

export default Counting;