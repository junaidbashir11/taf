import { Button, Input } from '@material-tailwind/react';
import React from 'react'
import Chart from '../../Chart';
import Icon from '../Utilities/Icon';
import IconButton from '../Utilities/IconButton';

function TechnicalIndicator({ onSidebarHide }) {

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
                <div className='w-full'>
                    <Chart />
                </div>
            </div>
        </div>
    );
}
export default TechnicalIndicator