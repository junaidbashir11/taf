import { Button, Input } from '@material-tailwind/react';
import React from 'react'
import Icon from '../Utilities/Icon';
import IconButton from '../Utilities/IconButton';

function AiPrediction({ onSidebarHide }) {

    return (
        <div className="flex w-full">
            <div className="w-full h-screen hidden sm:block sm:w-60 flex-shrink-0">
                .
            </div>
            <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
                <div className="w-full sm:flex p-2 items-end">
                    <div className="sm:flex-grow flex justify-between">
                        <div className="">
                            <div className="flex items-center">
                                <div className="text-3xl font-bold text-white">Hello David</div>
                                <div className="flex w-full items-center p-2 bg-card ml-2 rounded-xl">
                                    <Icon path="res-react-dash-premium-star" />
                                    <div className="ml-2 font-bold text-premium-yellow">
                                        PREMIUM
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Icon
                                    path="res-react-dash-date-indicator"
                                    className="w-3 h-3"
                                />
                                <div className="ml-2 text-[#ECECEF]">October 26</div>
                            </div>
                        </div>
                        <IconButton
                            icon="res-react-dash-sidebar-open"
                            className="block sm:hidden"
                            onClick={onSidebarHide}
                        />
                    </div>
                    <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
                        <Icon
                            path="res-react-dash-search"
                            className="w-5 h-5 search-icon left-3 absolute"
                        />
                        <form action="#" method="POST">
                            <input
                                type="text"
                                name="company_website"
                                id="company_website"
                                className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card"
                                placeholder="search"
                            />
                        </form>
                    </div>
                </div>
                <div className="flex flex-wrap mt-4 bg-card rounded-2xl p-6 w-full justify-evenly items-center">
                    <div className=" relative mb-2 mt-2 inline-block mr-4">
                        <select className="block cursor-pointer appearance-none w-full sidebar-bg border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue">
                            <option>5 min</option>
                            <option>1 hr</option>
                            <option>1 day</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
                            <svg className="fill-current text-white h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <div className="w-72 mb-2 mt-2">
                        <Input label="Ticker" />
                    </div>
                    <Button variant="gradient" className='mb-2 mt-2'>Predict</Button>
                </div>
            </div>
        </div>
    );
}
export default AiPrediction