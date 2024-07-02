import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaLandmark } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";


const SingleEstateDetails = () => {
    const { id } = useParams();

    // const singleData = useLoaderData();
    // console.log(user)
    // const {id, image} = user;
    const [singleEstate, setSingleEstate] = useState(null);

    useEffect(() => {
        fetch('/luxuryland.json')
            .then(res => res.json())
            .then((data) => {
                setSingleEstate(data)
                const foundState = data.find((item) => item.id === parseInt(id))
                setSingleEstate(foundState)
            })
            .catch((error) => console.error("Error fetching land details:", error));
    }, [id])
    console.log(singleEstate)

    if (!singleEstate) {
        return <div>Loading...</div>;
    }

    const { image, facilities, description, estate_title, segment_name, price, area, location, status } = singleEstate;
    console.log(price)

    return (
        <div className=" container mx-auto rounded-xl mt-16 mb-20">
            <div className=" bg-base-100  grid grid-cols-1 sm:grid-cols-2 py-10 px-10">
                <div>
                    <img className="w-full h-[500px] rounded-xl"
                        src={image}
                        alt="image" />
                </div>

                <div className="mt-10 sm:mt-0">
                    <div>

                        <div className="card-body border rounded-xl sm:ml-20">
                            <h2 className="card-title text-4xl font-bold">{estate_title}</h2>
                            <ul className='flex flex-row gap-1 mt-3 '>
                                <li className='text-yellow-300 text-2xl  font-bold'><IoLocationSharp /></li>
                                <li className='font-semibold text-xl'>{location}</li>
                            </ul>
                            <ul className='flex flex-row justify-between'>
                                <li className='text-ld font-semibold mt-1 '>Segment: {segment_name}</li>
                                
                                <li className='flex flex-row gap-2'>
                                    <FaLandmark className='text-yellow-800 mt-1' />
                                    <p className='text-md'>{area} Sq.fit</p>
                                </li>
                            </ul>
                            <hr className='mt-4' />
                            <p className=""><span className="font-bold text-xl">Description:</span>  <span className=""><br></br> {description}</span></p>
                            <h2 className="mt-2 mb-2"><span className="font-bold text-xl">Facilities:</span>  {
                                facilities.map((facility, idx) => <li key={idx} className="flex flex-row gap-1"> <TiTick className="mt-1 text-green-500 text-xl"></TiTick> <p className="text-lg first-letter:uppercase">{facility}</p> </li>)
                            } </h2>
                            <h2 className="flex flex-row"><span className="text-xl font-bold ">Status:</span> <p className="ml-2 first-letter:uppercase text-lg">{status}</p></h2>
                            <hr className='mt-4' />
                            <ul className='flex flex-row justify-between'>
                                <li className='text-lg font-bold'>Price: ${price}</li>
                                <li className='text-yellow-900 text-2xl font-bold mt-1'><CiHeart /></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleEstateDetails;