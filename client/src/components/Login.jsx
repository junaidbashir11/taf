import React, { useEffect } from 'react'
import GoogleLogo from "../assets/image/google_logo.png";
import loginImg from '../assets/image/bg1.jpg'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Transition from './Transition';
import { GoogleLogin, passwordReset, signInEmail, signUpEmail } from '../auth/auth';
import { Navigate, useNavigate } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

export default function Login() {

    const [signIn, setsignIn] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const handleClick2 = (e) => {
        e.preventDefault();
        if (email !== "" && password !== "") {
            signUpEmail(email, password);
        }
        // console.log(email, password);
    }
    const handleClick = (e) => {
        e.preventDefault();
        if (email !== "" && password !== "") {
            console.log(signInEmail(email, password));
            console.log("kk")
        }
        // console.log(email, password);
    }
    const handleClick3 = () => {
        setsignIn(!signIn);
        setEmail("");
        setPassword("");
    }


    return (<Transition>
        <div className='scrollbar-hide'>
            <img className='scrollbar-hide login_img zoom_eff' src={loginImg} alt="" />
        </div>
        <div className='flex justify-center items-center h-screen w-full'>
            <div className='bg-transparent flex flex-col justify-center'>
                <AnimatePresence mode="wait">
                    {
                        signIn ?
                            <motion.form key={signIn} initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }} className='max-w-[400px] w-full mx-auto rounded-lg bg-white bg-opacity-20 backdrop-blur-lg p-8 px-8'>
                                <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>
                                <div className='flex flex-col text-white py-1'>
                                    <label>Email</label>
                                    <input className='rounded-lg bg-[#ffffff4c]  mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className='flex flex-col text-white py-1'>
                                    <label>Password</label>
                                    <input className='rounded-lg bg-[#ffffff4c]  mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <Link to="/passwordreset" className='flex justify-end text-white py-1'>
                                    <p className='flex items-center underline cursor-pointer'>Forgot Password?</p>
                                </Link>
                                <button className='w-full my-2 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' onClick={handleClick} >SIGNIN</button>
                                <div className="relative inline-flex justify-center items-center w-full mb-4">
                                    <div className="flex-grow border-t border-gray-400"></div>
                                    <span className="flex-shrink mx-4 text-gray-100">OR</span>
                                    <div className="flex-grow border-t border-gray-400"></div>
                                </div>
                                <div className='flex justify-center px-4 items-center w-full md:w-[300px] py-2 bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg' onClick={() => GoogleLogin()}>
                                    <img src={GoogleLogo} alt="" className='h-6 w-6' />
                                    <span className="ml-4">
                                        Log in
                                        with
                                        Google
                                    </span>
                                </div>
                                <div className='flex justify-between mt-2 text-white py-2'>
                                    <p className='flex items-center mx-auto'>Register&nbsp;<span className=' underline cursor-pointer text-sm' onClick={handleClick3}>Here</span></p>
                                </div>
                            </motion.form>
                            :

                            <motion.form key={signIn} initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }} className='min-w-[360px] max-w-[400px] w-full mx-auto rounded-lg bg-white bg-opacity-20 backdrop-blur-lg p-8 px-8'>
                                <h2 className='text-4xl text-white font-bold text-center'>SIGN UP</h2>
                                <div className='flex flex-col text-white py-1'>
                                    <label>Email</label>
                                    <input className='rounded-lg bg-[#ffffff4c]  mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className='flex flex-col text-white py-1'>
                                    <label>Password</label>
                                    <input className='rounded-lg bg-[#ffffff4c]  mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <button className='w-full my-2 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' onClick={handleClick2}  >SIGN Up</button>
                                <div className="relative inline-flex justify-center items-center w-full mb-4">
                                    <div className="flex-grow border-t border-gray-400"></div>
                                    <span className="flex-shrink mx-4 text-gray-100">OR</span>
                                    <div className="flex-grow border-t border-gray-400"></div>
                                </div>
                                <div className='flex justify-center px-4 items-center w-full md:w-[300px] py-2 bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg' onClick={() => GoogleLogin()}>
                                    <img src={GoogleLogo} alt="" className='h-6 w-6' />
                                    <span className="ml-4">
                                        Log in
                                        with
                                        Google
                                    </span>
                                </div>
                                <div className='flex justify-between mt-2 text-white py-2'>
                                    <p className='flex items-center mx-auto'>Already have? &nbsp;<span className=' underline cursor-pointer' onClick={handleClick3}>Sign In</span></p>
                                </div>
                            </motion.form>
                    }
                </AnimatePresence>
            </div>
        </div>
    </Transition>
    )
}