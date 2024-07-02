import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleEstateDetails = () => {
    const {id} = useParams();

    const singleData = useLoaderData();
    // console.log(user)
    // const {id, image} = user;
    const [singleEstate, setSingleEstate] = useState(singleData);
    console.log(singleEstate)
    return (
        <div>
            <h1>{singleEstate.price}</h1>
    
        </div>
    );
};

export default SingleEstateDetails;