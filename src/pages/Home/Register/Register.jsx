import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
// import { updateProfile } from "firebase/auth";

const Register = () => {
    const [registrationError, setRegistrationError] = useState('');
    const [success, setSuccess] = useState('');
    const [passvisible, setPassVisible] = useState(false);
    const navigate = useNavigate();
    const { createUser, updateUser } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // Password length check 
        if(password.length < 6){
            setRegistrationError(
                Swal.fire({
                    title: 'Error!',
                    text: 'Password should be atleast 6 characters.',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                  })
            )
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegistrationError(
                Swal.fire({
                    title: 'Error!',
                    text: 'Password should have atleast one uppercase',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                  })
            )
            return;
        }
        else if(!/[a-z]/.test(password)){
            setRegistrationError(
                Swal.fire({
                    title: 'Error!',
                    text: 'Password should have atleast one uppercase',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                  })
            )
            return;
        }

        setRegistrationError('');
        setSuccess('');

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your account has been created',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                      }).then(() => {
                        navigate('/login'); // Redirect to login page
                    })
                )
                updateUser({
                    displayName: name,
                    photoURL : photo,
                })
                .then()
                .catch(error => console.log(error))
            
            
            })
            .catch(error => {
                console.error(error);
                setRegistrationError(
                    Swal.fire({
                        title: 'Error!',
                        text: 'The email is already in use. Please try with another email.',
                        icon: 'error',
                        confirmButtonText: 'Okay'
                      })
                )
            })
    }


    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Register - Homeland</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </HelmetProvider>
            <div className="hero min-h-screen lg:mt-8 bg-blend-overlay bg-[url('https://i.ibb.co/Y7PwJNX/3d-house-model-with-modern-architecture.jpg')]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center ml-4 lg:text-left">
                        <h1 className="text-5xl font-bold mb-10 text-white">Register Here!</h1>
                    </div>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={ passvisible ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered" required />
                                <span onClick={()=> setPassVisible(!passvisible)}>
                                 {
                                    passvisible ?  <FaRegEyeSlash className="relative bottom-8 left-3/4 ml-11 text-lg"></FaRegEyeSlash> : <FaRegEye className="relative bottom-8 left-3/4 ml-11 text-lg" />
                                }
                                    </span> 

                                <label className="label">
                                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                </label>
                            </div>
                            <div className="form-control">

                                <button className="btn w-full hover:bg-yellow-400 text-lg hover:text-[#262626] bg-[#160d0dc0] shadow-xl text-yellow-400 px-6 border-none rounded-xl py-2 ">Register</button>

                            </div>
                        </form>
                        
                        <div className="text-center mb-8">
                            <h4 className="text-md">Already have an account? <span className="text-yellow-700 font-extrabold">
                                <Link to='/login'>Login</Link>
                            </span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;