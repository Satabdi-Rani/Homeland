import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
    const {createUser}  = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password )

        // create user
        createUser(email, password)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error(error);
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
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-10">Register Here!</h1>
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
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
        
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