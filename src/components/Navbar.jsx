import React, { useState } from 'react'
import { FaBars, FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

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
    const [openSearch, setOpenSearch] = useState(false)

    if (openMenu) {
        return <div className='bg-white absolute top-0 right-0 left-0 bottom-0 flex-row p-5 transition-all '>
            <div className='flex justify-end'>
                <IoIosClose className='text-gray-600 text-3xl text-right' onClick={() => setOpenMenu(false)} />
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

    if (openSearch) {
        return <div className='bg-white absolute top-0 right-0 left-0 bottom-0 flex-row p-5 transition-all '>
            <div className='flex justify-end'>
                <IoIosClose className='text-gray-600 text-3xl text-right' onClick={() => setOpenSearch(false)} />
            </div>
            <div className='flex-row justify-center text-center'>
                <input placeholder='Search...' className='border p-3 mt-5 rounded-lg' />
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
                    <FaSearch className='text-gray-600' onClick={() => setOpenSearch(true)} />
                </div>
            </div>

        </div>
    )
}

export default Navbar