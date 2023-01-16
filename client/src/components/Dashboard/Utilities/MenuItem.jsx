import React, { useState } from 'react'
import SidebarIcons from "./SidebarIcons"
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import { IoMdArrowDropdown } from "react-icons/io"
import { Link } from 'react-router-dom';
function MenuItem({ item: { id, title, notifications, subNav, subMenuData,link }, onClick, selected }) {
    const [openDropdwon, setopenDropdwon] = useState(false);

    const showSubnav = () => setopenDropdwon(!openDropdwon);

    const handleClick = () => {
        onClick(id)
        if (subNav) {
            showSubnav()
            console.log(subMenuData.map((item) => console.log(item)))
        }
    }
    return (
        <>
            <Link to={link}
                className={clsx(
                    'w-full mt-6 flex items-center px-3 sm:px-3 justify-start sm:justify-start sm:mt-3 cursor-pointer',
                    selected === id ? 'sidebar-item-selected' : 'sidebar-item',
                )}
                onClick={() => handleClick()}
            >
                <SidebarIcons id={id} />
                <div className="block sm:block ml-2">{title}</div>
                <div className="block sm:block flex-grow" />
                {subNav && (
                    <div className="flex sm:flex w-5 h-5 items-center justify-center mr-2">
                        <div className="text-white w-5 h-5 mt-1 text-sm"><IoMdArrowDropdown></IoMdArrowDropdown></div>
                    </div>
                )}
            </Link>
            {
                subNav && <>
                    {
                        openDropdwon &&
                        subMenuData.map((item) =>
                        (
                            <div className="flex text-[#f5f5f5] pl-12 items-center cursor-pointer list-none h-[60px]" key={item.id}>
                                {item.icon}
                                <div className='ml-[16px] text-[14px]'>{item.title}</div>
                            </div>
                        )
                        )
                    }
                </>
            }
        </>
    );
}

export default MenuItem