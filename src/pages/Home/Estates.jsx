import { useEffect, useState } from "react";
import Estate from "./Estate";

const Estates = () => {
   const [estatesData, setEstatesData] = useState([]);

   useEffect(()=> {
    fetch('/public/luxuryland.json')
    .then(res => res.json())
    .then(data => setEstatesData(data))
   }, [])

    return (
        <div className="container mx-auto mt-20">
            <div className="flex flex-col items-center">
                <h4 className="text-lg text-yellow-600 font-bold">Best Choice!</h4>
                <h1 className="text-5xl font-bold mt-2">Luxurious Properties</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 ">
                     {
                        estatesData.map(estateData => <Estate key={estateData.id} estateData={estateData}></Estate>)
                     }
                </div>
            </div>
        </div>
    );
};

export default Estates;