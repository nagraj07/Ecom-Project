import { FacebookFilled, GoogleSquareFilled, TwitterSquareFilled } from '@ant-design/icons';
import axios from 'axios';
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    
    const [data, setData] = useState({name:"", email:"", password:"", confirmpassword:""})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value}));
    }

    const handleRegisterData = (e) => {
        e.preventDefault();
       
        axios.post('http://localhost:5000/register',data)
        .then((res) => {
            alert("Register Sucessfully");
            console.log(res.data);
        })
        .catch((err) => {
            alert("Error to Register");
            console.log(err);
        })
    }

    return (
        <div id='register' className="min-h-screen flex justify-start bg-forms-bg bg-cover bg-opacity-10 pl-20 py-4 border rounded-lg">

            <div className="w-full max-w-sm p-4 px-7 space-y-5 bg-white bg-opacity-15 rounded-lg shadow-lg border border-white border-opacity-20">

                <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>

                <form 
                    className="mt-8 space-y-4"
                    onSubmit={handleRegisterData}
                >
                    <div>
                        <label htmlFor="Name" className="block text-sm font-medium text-gray-50">Name</label>
                        <input
                            type="text"
                            id="text"
                            name='name'
                            value={data.name}
                            onChange={handleChange}
                            className="mt-1 w-full p-1 border rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your Name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-50">Email</label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                            className="mt-1 w-full p-1 border rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your Email"
                            autoComplete="new-email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-50">Password</label>
                        <input
                            type="password"
                            id="password"
                            name='password'
                            value={data.password}
                            onChange={handleChange}
                            className="mt-1 w-full p-1 border rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your password"
                            autoComplete="new-password"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-50">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmpassword"
                            name='confirmpassword'
                            value={data.confirmpassword}
                            onChange={handleChange}
                            className="mt-1 w-full p-1 border rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Confirm password"
                            autoComplete="new-password"
                            required
                        />
                    </div>



                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="flex items-center justify-between">
                    <span className="w-1/5 border-b border-white"></span>
                    <span className="text-sm text-gray-50">or sign Up with</span>
                    <span className="w-1/5 border-b border-white"></span>
                </div>

                <div className="flex justify-center space-x-6">
                    <button className="text-indigo-400 text-2xl" aria-label="Login with Facebook">
                        <FacebookFilled />
                    </button>
                    <button className="text-red-400 text-2xl" aria-label="Login with Google">
                        <GoogleSquareFilled />
                    </button>
                    <button className="text-blue-300 text-2xl" aria-label="Login with Twitter">
                        <TwitterSquareFilled />
                    </button>
                </div>

                <p className="text-center text-sm text-white">
                    Alredy have an account?
                    <Link to={"/login"} className='text-indigo-600 hover:underline"'>Sign Up</Link>
                </p>
            </div>

            <div className='w-full justify-center'>
                <h1 className='text-center text-6xl font-mono font-extrabold mt-6 text-indigo-50'>Fashion Mart</h1>
            </div>
        </div>
    );
}

export default Register;
