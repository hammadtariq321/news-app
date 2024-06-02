import React, { useState } from 'react'
import { FaBars, FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import SearchNews from './SearchNews';
import { Link, NavLink } from 'react-router-dom';

const nav_links = [
    {
        'name': "Home",
        'link': "/",
    },
    {
        'name': "Articles",
        'link': "/articles",
    },
    {
        'name': "Personalized",
        'link': "/personalized",
    }
]
function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    if (openMenu) {
        return <div className='bg-white absolute top-0 right-0 left-0 bottom-0 flex-row p-5 transition-all z-50'>
            <div className='flex justify-end'>
                <IoIosClose className='cursor-pointer text-3xl text-right' onClick={() => setOpenMenu(false)} />
            </div>
            <div className='flex-row justify-center text-center'>
                {nav_links?.map((item, index) => {
                    return (
                        <div key={index} className=' text-md mt-3 underline font-semibold'>{item?.name}</div>
                    )
                })}
            </div>
        </div>
    }

    // if (openSearch) {
    //     return <div className='bg-white absolute top-0 right-0 left-0 bottom-0 flex-row p-5 transition-all z-50 h-screen overflow-scroll'>
    //         <div className='flex justify-end'>
    //             <IoIosClose className='cursor-pointer text-3xl text-right' onClick={() => setOpenSearch(false)} />
    //         </div>
    //         <SearchNews />
    //     </div>
    // }
    return (
        <div className='border-b-2 p-5 md:px-10 '>
            <div className='flex justify-between items-center md:w-[75%] m-auto'>
                <div className='text-2xl font-semibold text-gray-600'>News App</div>
                <div className='flex gap-5'>
                    {nav_links?.map((link, index) => {
                        return (
                            <NavLink
                                key={index}
                                to={link.link}
                                className={({ isActive }) =>
                                    isActive ? 'text-md hidden md:block font-semibold underline' : 'text-md hidden md:block'
                                }
                            >
                                {link?.name}
                            </NavLink>

                        )
                    })}
                </div>
                <div className='flex gap-4'>
                    <FaBars className='cursor-pointer md:hidden' onClick={() => setOpenMenu(true)} />
                    <Link to="/search">
                        <FaSearch className='cursor-pointer' />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar