import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom";
import { MdOutlineHome, MdTimeline } from "react-icons/md";
import { CiClock2 } from "react-icons/ci"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4">

            <div className="flex-1">
                <img src={logo} alt="logo" className="h-8" />
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-2">

                    <li>
                        <NavLink to="/"
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-md ${isActive
                                    ? "bg-green-900 text-white"
                                    : " bg-white text-black"
                                }`
                            } > <MdOutlineHome size={20} />   Home </NavLink>
                    </li>

                    <li>
                        <NavLink to="/timeline"
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-md ${isActive
                                    ? "bg-green-900 text-white"
                                    : "text-black"
                                }`
                            } > <CiClock2 size={17} />Timeline</NavLink>
                    </li>

                    <li>
                        <NavLink to="/stats"
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-md ${isActive
                                    ? "bg-green-900 text-white"
                                    : "text-black"
                                }`
                            } >  <MdTimeline size={20} />Stats </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;