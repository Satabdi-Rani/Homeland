import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');



    useEffect(() => {
        setDisplayName(user?.displayName)
        setPhotoURL(user?.photoURL)
    }, [user])

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        if (user) {
            try {
                await updateProfile(user, {
                    displayName, photoURL
                })
            }
            catch (error) {
                console.log(error)
            }

        }
    }

    return (
        <div className="container mx-auto mt-16 mb-20">
            {/* <p>{displayName}</p> */}
            {/* <img src={photoURL} alt="" /> */}
            {/* <form action="">
                <input  />
                <input  />
                <br />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form> */}


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mx-10 sm:mx-10 border">
                <div className="mx-auto justify-center items-center p-12 ">
                    <img className="w-[300px] h-[300px] rounded-full" src={photoURL} alt="" />
                </div>

                <div>
                    <div className="border-l sm:mt-4 mb-4  ">
                        <div className=" pt-8 pb-24 w-full ">
                            <form onSubmit={handleProfileUpdate} className="card-body">
                                <div className="form-control flex flex-row">
                                    <h2 className="text-lg font-bold mt-2">Name: </h2>
                                    <input className="px-12 py-3 bg-gray-100 ml-4 sm:ml-14 rounded-md" onChange={(e) => setDisplayName(e.target.value)} type="text" value={displayName} />
                                </div>
                                <div className="form-control flex flex-row mt-2">
                                    <h2 className="text-lg font-bold mt-2">Photo URL: </h2>
                                    <input className="px-12 py-3 bg-gray-100 ml-4 rounded-md" onChange={(e) => setPhotoURL(e.target.value)} type="text" value={photoURL} />
                                </div>

                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary w-1/2">Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;