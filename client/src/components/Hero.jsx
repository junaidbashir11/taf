import React from 'react'
import graphic from "../assets/image/graphic5.png"
function Hero() {
    return (
        // < !--Main-- >
        <div className="container pt-12 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* <!--Left Col--> */}
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                    Trade {" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                        With Confidence {", "}
                    </span>
                    be limitless!
                </h1>
                <p className="leading-normal text-[darkgray] text-base md:text-2xl mb-8 text-center md:text-left">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis hic ab rerum.
                </p>

                <div className="bg-transparent flex justify-center items-center md:justify-start opacity-75 w-full shadow-lg rounded-lg">
                    <button
                        className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                        type="button"
                    >
                        Get Started
                    </button>
                </div>
            </div>

            {/* <!--Right Col--> */}
            <div className="w-full xl:w-3/5 p-12 overflow-hidden">
                <img className="shadow_eff mx-auto w-full transform transition  duration-700 ease-in-out" src={graphic} />
            </div>
        </div>
    )
}

export default Hero