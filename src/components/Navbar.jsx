import React, { useState } from 'react'
import { FaBars, FaSearch } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const nav_links = [
    {
        'name': "Home",
        'link': "/",
    },
    {
        'name': "Technology",
        'link': "/technology",
    },
    {
        'name': "Sports",
        'link': "/sports",
    }
]
function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    if (openMenu) {
        return <div className='bg-white absolute top-0 right-0 left-0 bottom-0 flex-row p-5 transition-all '>
            <div className='flex justify-end'>
                <IoIosCloseCircleOutline className='text-gray-600 md:hidden text-3xl text-right' onClick={() => setOpenMenu(false)} />
            </div>
            <div className='flex-row justify-center text-center'>
                {nav_links?.map((item, index) => {
                    return (
                        <div key={index} className='text-gray-600 text-md mt-3 underline font-semibold'>{item?.name}</div>
                    )
                })}
            </div>
        </div>
    }
    return (
        <div className='border border-b-1 py-5 px-5  bg-[#f1f1f198] md:px-10'>
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-semibold text-gray-600'>News App</div>
                <div className='flex gap-5'>
                    {nav_links?.map((item, index) => {
                        return (
                            <div key={index} className='text-gray-600 text-md hidden md:block'>{item?.name}</div>
                        )
                    })}
                </div>
                <div className='flex gap-2'>
                    <FaBars className='text-gray-600 md:hidden' onClick={() => setOpenMenu(true)} />
                    <FaSearch className='text-gray-600' />
                </div>
            </div>

        </div>
    )
}

export default Navbar