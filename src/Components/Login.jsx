import { FacebookFilled, GoogleSquareFilled, TwitterSquareFilled } from '@ant-design/icons';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [data, setData] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({...prevData,[name] : value}))
    }

    const handleLoginData = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/register/',data)
            .then((res) => {
                alert("Logged In Successfully");
                console.log(res.data)
            })
            .catch((err) => {
                alert("Error ! to Logged In")
                console.log(err)
            })
        
    }

    return (
        <div className="min-h-screen flex justify-start bg-forms-bg bg-cover pl-20 py-4 border rounded-lg">

            <div className="w-full max-w-sm p-7 space-y-6 bg-white bg-opacity-15 rounded-lg shadow-lg border border-white border-opacity-20">

                <h2 className="text-2xl font-bold text-center text-white">Login</h2>

                <form
                    className="mt-8 space-y-6"
                    onSubmit={handleLoginData}
                >
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-50">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 border rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-50">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 border rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                            <span className="ml-2 text-gray-50">Remember me</span>
                        </label>
                        <a href="http://localhost:3001/register" className="text-sm text-indigo-600 hover:underline">Forgot your password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>

                <div className="flex items-center justify-between">
                    <span className="w-1/5 border-b border-white"></span>
                    <span className="text-sm text-gray-50">or sign In with</span>
                    <span className="w-1/5 border-b border-white"></span>
                </div>

                <div className="flex justify-center space-x-4">
                    <button className="text-indigo-400 text-3xl" aria-label="Login with Facebook">
                        <FacebookFilled />
                    </button>
                    <button className="text-red-400 text-3xl" aria-label="Login with Google">
                        <GoogleSquareFilled />
                    </button>
                    <button className="text-blue-300 text-3xl" aria-label="Login with Twitter">
                        <TwitterSquareFilled />
                    </button>
                </div>

                <p className="text-center text-sm text-white">
                    Don't have an account? 
                    <Link to={"/register"} className='text-indigo-600 hover:underline"'>Sign Up</Link>
                </p>
            </div>

            <div className='w-full justify-center'>
                <h1 className='text-center text-6xl font-mono font-extrabold mt-6 text-indigo-50'>Fashion Mart</h1>
            </div>
        </div>
    );
};

export default Login;