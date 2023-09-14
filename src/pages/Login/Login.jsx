import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="py-6">
                            <button className='btn btn-primary w-full mb-3'>Google</button>
                            <button className='btn btn-success w-full'>Github</button>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label">
                                <Link to="/register" className="label-text-alt link link-hover">Don't have an account? Please Register</Link>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;