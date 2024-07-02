import { useEffect, useState } from "react";

const Gallery = () => {
    const [gallery, setGallery] = useState([]);

//    const handleSingleEstate = (clickedId) => {
//       console.log('button clicked')
//    }

   useEffect(()=> {
    fetch('/luxuryland.json')
    .then(res => res.json())
    .then(data => setGallery(data))
   }, [])

    return (
        <div className="container mx-auto mt-20 mb-20">
            <div className="flex flex-col items-center">
                <h4 className="text-lg text-yellow-600 font-bold">Welcome!</h4>
                <h1 className="text-3xl lg:text-5xl font-bold mt-2">Checkout our other VILLAS</h1>
                <div className="grid grid-cols-1 mx-10 sm:mx-0  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 ">
                     {
                        gallery.map(pic => <div key={pic.id}>
                            <img className="rounded-xl" src={pic.image} alt="" />
                        </div>)
                     }
                </div>
            </div>
        </div>
    );
};

export default Gallery;