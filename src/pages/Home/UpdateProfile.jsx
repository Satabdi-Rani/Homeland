import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
    const {user} = useContext(AuthContext);
    const [displayName, setDisplayName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

    

    useEffect(()=> {
        setDisplayName(user?.displayName)
        setPhotoURL(user?.photoURL)
    }, [user])

    const handleProfileUpdate = async(e) =>{
        e.preventDefault();
        if(user){
            try{
                await updateProfile(user, {
                    displayName, photoURL
                })
            }
            catch(error){
                console.log(error)
            }

        }
    }

    return (
        <div>
            <p>{displayName}</p>
            <img src={photoURL} alt="" />
            <form onSubmit={handleProfileUpdate} action="">
                <input onChange={(e)=> setDisplayName(e.target.value) } type="text" value={displayName}  />
                <input onChange={(e)=> setPhotoURL(e.target.value) } type="text" value={photoURL}  />
                <br />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UpdateProfile;