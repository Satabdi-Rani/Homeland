import PropTypes from 'prop-types';
import { IoLocationSharp } from "react-icons/io5";
import { FaLandmark } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';



const Estate = ({ estateData }) => {
    const {id, image, estate_title, segment_name, price, area, location } = estateData;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={image} alt="homes" className="rounded-xl" />
                </figure>
                {/* <button>For Sale</button> */}
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <ul className='flex flex-row gap-1 '>
                        <li className='text-yellow-300 text-xl font-bold'><IoLocationSharp /></li>
                        <li className='font-semibold'>{location}</li>
                    </ul>
                    <ul className='flex flex-row justify-between'>
                        <li className='text-ld font-semibold mt-1 '>Segment: {segment_name}</li>
                        <li className='flex flex-row gap-2'>
                            <FaLandmark className='text-yellow-800 mt-1' />
                            <p className='text-md'>{area} Sq.fit</p>
                        </li>
                    </ul>
                    {/* <ul className='flex flex-row justify-between'>
                        {
                            facilities.map((facility, idx) => <li className='' key={idx}>{facility}</li>)
                        }
                    </ul> */}
                    <hr className='mt-4' />
                    <ul className='flex flex-row justify-between'>
                        <li className='text-lg font-bold'>Price: ${price}</li>
                        <li className='text-yellow-900 text-2xl font-bold mt-1'><CiHeart /></li>
                    </ul>
                    <div className="card-actions">
                        <Link to={`/estate/${id}`}>
                        <button className="btn bg-yellow-400 text-lg text-[#262626] hover:bg-[#160d0dc0] shadow-xl
                         hover:text-yellow-400 px-6 border-none rounded-xl py-2 mt-4">View Propert</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Estate.propTypes = {
    estateData: PropTypes.object
}

export default Estate;