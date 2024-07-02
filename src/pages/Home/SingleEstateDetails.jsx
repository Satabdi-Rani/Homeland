import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

const SingleEstateDetails = () => {
    const {id} = useParams();

    // const singleData = useLoaderData();
    // console.log(user)
    // const {id, image} = user;
    const [singleEstate, setSingleEstate] = useState([]);

    useEffect(()=> {
        fetch('./luxuryland.json')
        .then( res => res.json())
        .then((data) => {
            const foundState = data.find((item) => item.id === parseInt(id))
            setSingleEstate(foundState)
        })
        .catch((error) => console.error("Error fetching land details:", error));
    }, [id])
    
    
    const {price} = singleEstate;
    console.log(price)
    // console.log(singleEstate)
    return (
        <div>
            <h1>{price}</h1>
    
        </div>
    );
};

export default SingleEstateDetails;