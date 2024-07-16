import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Welcome Back to</h1>
                    <h2 className='text-3xl font-bold'>bKash Dashboard</h2>
                </div>
                <div className="card card-body bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#E2136E] text-white">Sigh In</button>
                        </div>
                    </form>
                    <p className='text-center'>New to bKash? <Link to='register' className='text-orange-400'>Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;