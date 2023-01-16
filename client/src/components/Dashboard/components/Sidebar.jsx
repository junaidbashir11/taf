import React, { useState } from 'react'
import Icon from '../Utilities/Icon';
import IconButton from '../Utilities/IconButton';
import Image from '../Utilities/Image';
import MenuItem from '../Utilities/MenuItem';
import { useSpring, animated, config } from "@react-spring/web";
import logo from "../../../assets/image/logo2.png"
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import { AiOutlineStock } from "react-icons/ai"
import { Link } from 'react-router-dom';
function Sidebar({ onSidebarHide, showSidebar }) {
    const [selected, setSelected] = useState('0');
    const { dashOffset, indicatorWidth, precentage } = useSpring({
        dashOffset: 26.015,
        indicatorWidth: 70,
        precentage: 77,
        from: { dashOffset: 113.113, indicatorWidth: 0, precentage: 0 },
        config: config.molasses,
    });

    const sidebarItems = [
        [
            {
                id: '0', title: 'Dashboard', notifications: false, subNav: false, subMenuData: [],
                link: ""
            },
            {
                id: '1', title: 'AI Prediction', notifications: false, subNav: true, subMenuData: [
                    {
                        title: "LSTM",
                        id: "1",
                        icon: <AiOutlineStock></AiOutlineStock>
                    }
                ],
                link: "aiprediction"
            },
            {
                id: '7', title: 'Technical Indicators', notifications: false, subNav: true, subMenuData: [
                    {
                        title: "RSI",
                        id: "1",
                        icon: <AiOutlineStock></AiOutlineStock>
                    },
                    {
                        title: "MFI",
                        id: "2",
                        icon: <AiOutlineStock></AiOutlineStock>
                    },
                    {
                        title: "MACD",
                        id: "3",
                        icon: <AiOutlineStock></AiOutlineStock>
                    },
                    {
                        title: "Bollinger Bands",
                        id: "4",
                        icon: <AiOutlineStock></AiOutlineStock>
                    },
                ],
                link: "technical"
            },
            {
                id: '2', title: 'Chat', notifications: 6, subNav: false, subMenuData: [],
                link: ""
            },
            {
                id: '3', title: 'Team', notifications: false, subNav: false, subMenuData: [],
                link: ""
            },
        ],
        [
            {
                id: '4', title: 'Tasks', notifications: false, subNav: false, subMenuData: [],
                link: ""
            },
            {
                id: '5', title: 'Reports', notifications: false, subNav: false, subMenuData: [],
                link: ""
            },
            {
                id: '6', title: 'Settings', notifications: false, subNav: false, subMenuData: [],
                link: "profile"
            },
        ],
    ];

    return (
        <div
            className={clsx(
                'fixed inset-y-0 left-0 sidebar-bg w-full sm:w-60 sm:flex flex-col z-10 scrollbar-hide',
                showSidebar ? 'flex' : 'hidden',
            )}
        >
            <div className="flex-shrink-0 overflow-hidden p-2">
                <Link to="/" className="flex items-center h-full sm:justify-start p-2 sidebar-separator-top cursor-pointer">
                    <img src={logo} className="w-20 h-20" />
                    <div className="block sm:block ml-2 font-bold text-xl text-white">
                        Tradingo
                    </div>
                    <div className="flex-grow sm:block" />
                    <IconButton
                        icon="res-react-dash-sidebar-close"
                        className="block sm:hidden"
                        onClick={onSidebarHide}
                    />
                </Link>
            </div>
            <div className="flex-grow scrollbar-hide overflow-x-hidden overflow-y-auto flex flex-col">
                {sidebarItems[0].map((i) => (
                    <MenuItem
                        key={i.id}
                        item={i}
                        onClick={setSelected}
                        selected={selected}
                    />
                ))}
                <div className="mt-8 mb-0 text-white font-bold px-3 block sm:block">
                    SHORTCUTS
                </div>
                {sidebarItems[1].map((i) => (
                    <MenuItem
                        key={i.id}
                        item={i}
                        onClick={setSelected}
                        selected={selected}
                    />
                ))}
                <div className="flex-grow" />
                <div className="w-full p-3 h-28 hidden sm:block sm:h-32">
                    <div
                        className="rounded-xl w-full h-full px-3 sm:px-3 overflow-hidden"
                        style={{
                            backgroundImage: "url('https://assets.codepen.io/3685267/res-react-dash-usage-card.svg')",
                        }}
                    >
                        <div className="block sm:block pt-3">
                            <div className="font-bold text-gray-300 text-sm">Used Space</div>
                            <div className="text-gray-500 text-xs">
                                Admin updated 09:12 am November 08,2020
                            </div>
                            <animated.div className="text-right text-gray-400 text-xs">
                                {precentage.interpolate((i) => `${Math.round(i)}%`)}
                            </animated.div>
                            <div className="w-full text-gray-300">
                                <svg
                                    viewBox="0 0 100 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line
                                        x1="5"
                                        y1="5.25"
                                        x2="95"
                                        y2="5.25"
                                        stroke="#3C3C3C"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                    <animated.line
                                        x1="5"
                                        y1="5.25"
                                        x2={indicatorWidth}
                                        y2="5.25"
                                        stroke="currentColor"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="hidden sm:hidden ">
                            <svg
                                width="56"
                                height="56"
                                viewBox="0 0 56 56"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="56" height="56" fill="#2C2C2D" />
                                <path
                                    d="M 28 28 m 0, -18 a 18 18 0 0 1 0 36 a 18 18 0 0 1 0 -36"
                                    stroke="#3C3C3C"
                                    strokeWidth="6"
                                />
                                <animated.path
                                    d="M 28 28 m 0, -18 a 18 18 0 0 1 0 36 a 18 18 0 0 1 0 -36"
                                    stroke="#fff"
                                    strokeLinecap="round"
                                    strokeDasharray="113.113"
                                    strokeDashoffset={dashOffset}
                                    strokeWidth="6"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-shrink-0 overflow-hidden p-2">
                <div className="flex items-center h-full sm:justify-start p-2 sidebar-separator-bottom">
                    <Image path="mock_faces_8" className="w-10 h-10" />
                    <div className="block text-white sm:block ml-2 font-bold ">
                        Jerry Wilson
                    </div>
                    <div className="flex-grow block sm:block" />
                    <Icon
                        path="res-react-dash-options"
                        className="block sm:block w-3 h-3"
                    />
                </div>
            </div>
        </div>
    );
}

export default Sidebar

