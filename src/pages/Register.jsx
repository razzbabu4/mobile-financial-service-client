import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Welcome to</h1>
                    <h2 className='text-3xl font-bold'>bKash Dashboard</h2>
                </div>
                <div className="card card-body bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" placeholder="phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pin</span>
                            </label>
                            <input type="password" placeholder="pin" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#E2136E] text-white">Sigh Up</button>
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link to='/' className='text-orange-400'>Sign In</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;