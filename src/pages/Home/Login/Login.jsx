import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
    const [success, setSuccess] = useState('');
    const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);
    const [passvisible, setPassVisible] = useState(false);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)


        // Login with email and password
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(
                    Swal.fire({
                        title: 'Success!',
                        text: 'You successfully logged in',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    }).then(() => {
                        navigate('/'); // Redirect to login page
                    })
                )
            })
            .catch(error => {
                console.log(error)
            })
    }


    // Google Login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                setSuccess(
                    Swal.fire({
                        title: 'Success!',
                        text: 'You successfully logged in',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    }).then(() => {
                        navigate('/'); // Redirect to login page
                    })
                )
            })
            .catch(error => {
                console.log(error)
            })
    }

    // Github Login
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user)
                setSuccess(
                    Swal.fire({
                        title: 'Success!',
                        text: 'You successfully logged in',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    }).then(() => {
                        navigate('/'); // Redirect to login page
                    })
                )
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="">
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Login - Homeland</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </HelmetProvider>


            <div className="hero min-h-screen bg-blend-overlay bg-[url('https://i.ibb.co/pLFQxgz/view-luxurious-hotel-interior-space.jpg')]  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center ml-8 lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Login now!</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <button onClick={handleGoogleLogin}>
                            <div className="border rounded-full m-6 p-4 flex flex-row justify-center gap-2">
                                <p className=" mt-1 "><FaGoogle /></p>
                                <h4 className="text-md font-bold">Continue with Google</h4>
                            </div>
                        </button>

                        <button onClick={handleGithubLogin}>
                            <div className="border rounded-full mx-6 p-4 flex flex-row justify-center gap-2">
                                <p className=" mt-1 "> <FaGithub></FaGithub></p>
                                <h4 className="text-md font-bold">Continue with Github</h4>
                            </div>
                        </button>

                        <div className="divider mx-7 mt-6">Or</div>

                        <form onSubmit={handleLogin} className="card-body">
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
                                <input type={ passvisible ? "text" : "password"}
                                 placeholder="Password" name="password" className="input input-bordered" required />
                                 <span onClick={()=> setPassVisible(!passvisible)}>
                                 {
                                    passvisible ?  <FaRegEyeSlash className="relative bottom-8 left-3/4 ml-11 text-lg"></FaRegEyeSlash> : <FaRegEye className="relative bottom-8 left-3/4 ml-11 text-lg" />
                                }
                                    </span>                                
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control">
                                <button className="btn w-full hover:bg-yellow-400 text-lg hover:text-[#262626] bg-[#160d0dc0] shadow-xl text-yellow-400 px-6 border-none rounded-xl py-2 ">Login</button>
                            </div>
                        </form>

                        <div className="text-center mb-8">
                            <h4 className="text-md">Do not have an account? Please <span className="text-yellow-700 font-extrabold">
                                <Link to='/register'>Register</Link>
                            </span> here</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;