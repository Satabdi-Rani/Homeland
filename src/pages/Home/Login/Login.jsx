import { FaGithub, FaRegEye } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log('error', error.message);
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)
    }

    return (
        <div>
            <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login - Homeland</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            </HelmetProvider>
            
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <button onClick={handleGoogleLogin}>
                            <div className="border rounded-full m-6 p-4 flex flex-row justify-center gap-2">
                                <p className=" mt-1 "><FaGoogle /></p>
                                <h4 className="text-md font-bold">Continue with Google</h4>
                            </div>
                            </button>

                        <Link>
                            <div className="border rounded-full mx-6 p-4 flex flex-row justify-center gap-2">
                                <p className=" mt-1 "> <FaGithub></FaGithub></p>
                                <h4 className="text-md font-bold">Continue with Github</h4>
                            </div>
                        </Link>

                        <div className="divider mx-7 mt-6">Or</div>

                        <form onSubmit={handleLogin}  className="card-body">
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
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                <FaRegEye className="relative bottom-8 left-3/4 ml-11 text-lg" />
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