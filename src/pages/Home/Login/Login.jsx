import { FaGithub, FaRegEye } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
// import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
// import app from "../../../firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    // const [googleSignInUser, setGoogleSignInUser] = useState([]);
    // const [githubSignInUser, setGithubSignInUser] = useState([]);

    // const auth = getAuth(app);
    // const provider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();



    // Login with Github
    // const handleGithubLogin = () => {
    //     signInWithPopup(auth, githubProvider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user)
    //             setGithubSignInUser(user)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    // Login with Google
    // const handleGoogleLogin = () => {
    //     signInWithPopup(auth, provider)
    //         .then(result => {
    //             const googleUser = result.user;
    //             console.log(googleUser);
    //             setGoogleSignInUser(googleUser)

    //         })
    //         .catch(error => {
    //             console.log('error', error.message);
    //         })
    // }

    // Logout with google
    // const handleGoogleLogout = () => {
    //     signOut(auth)
    //         .then(result => {
    //             console.log(result)
    //             setGoogleSignInUser(null)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

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
                navigate('/');
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            navigate('/');
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
            {/* {
                githubSignInUser ? githubSignInUser.length : 'blili'
            }
            {
                googleSignInUser &&
                <div>
                    {googleSignInUser.displayName}
                    <div className="form-control">
                        <button onClick={handleGoogleLogout} className="btn w-28 hover:bg-yellow-400 text-lg hover:text-[#262626] bg-[#160d0dc0] shadow-xl text-yellow-400 px-6 border-none rounded-xl py-2 ">LogOut</button>
                    </div>
                </div>
            } */}

            <div className="hero min-h-screen bg-blend-overlay bg-[url('https://i.ibb.co/pLFQxgz/view-luxurious-hotel-interior-space.jpg')]  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center ml-8 lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Login now!</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <button onClick={handleGoogleSignIn}>
                            <div className="border rounded-full m-6 p-4 flex flex-row justify-center gap-2">
                                <p className=" mt-1 "><FaGoogle /></p>
                                <h4 className="text-md font-bold">Continue with Google</h4>
                            </div>
                        </button>

                        <button >
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