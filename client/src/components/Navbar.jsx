import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from "../assets/image/logo.png";
import { auth } from '../firebase';
import {signOutUser} from "../auth/auth"

function Navbar() {
    const [openMenu, setopenMenu] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    return (
        <>
            <nav className="relative flex justify-between items-center bg-transparent">
                <img src={logo} className="h-30 w-[12rem] cursor-pointer" alt="" />
                <div className="lg:hidden">
                    {!openMenu && <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={() => setopenMenu(true)}>
                        <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>}
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                    <li><a className="text-md text-white font-medium hover:text-gray-500" href="#">Home</a></li>
                    <li><a className="text-md text-white font-medium hover:text-gray-500" href="#">About Us</a></li>
                    <li><a className="text-md text-white font-medium hover:text-gray-500" href="#">Services</a></li>
                    <li><a className="text-md text-white font-medium hover:text-gray-500" href="#">Pricing</a></li>
                    <li><a className="text-md text-white font-medium hover:text-gray-500" href="#">Contact</a></li>
                </ul>
                <Link to="/dashboard" className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">Dashboard</Link>
                {
                    !user ?
                    <Link to="/login" className="hidden lg:inline-block bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">Sign up</Link> :
                        <button to="/" className="hidden lg:inline-block bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out" onClick={e=> signOutUser()} >Log out</button>
                }
            </nav>
            <AnimatePresence>

                {
                    openMenu && <motion.div
                        transition={{ delay: 1 }} className="navbar-menu relative z-50">
                        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black overflow-y-auto ">
                            <div className="flex items-center mb-8">
                                <a className="mr-auto text-3xl font-bold leading-none" href="#">
                                    <img src={logo} className="h-20 w-30 cursor-pointer" alt="" />
                                </a>
                                <button className="navbar-close" onClick={() => setopenMenu(false)}>
                                    <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <ul>
                                    <li className="mb-1">
                                        <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
                                    </li>
                                    <li className="mb-1">
                                        <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
                                    </li>
                                    <li className="mb-1">
                                        <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
                                    </li>
                                    <li className="mb-1">
                                        <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
                                    </li>
                                    <li className="mb-1">
                                        <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <div className="pt-6">
                                    <Link to="/dashboard" className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" >Dashboard</Link>
                                    <Link className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" to="/login">Sign Up</Link>
                                </div>
                                <p className="my-4 text-xs text-center text-gray-400">
                                    <span>Copyright © 2021</span>
                                </p>
                            </div>
                        </nav>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default Navbar