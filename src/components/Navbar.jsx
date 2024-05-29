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
                <IoIosClose className=' text-3xl text-right' onClick={() => setOpenMenu(false)} />
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

    if (openSearch) {
        return <div className='bg-white absolute top-0 right-0 left-0 bottom-0 flex-row p-5 transition-all '>
            <div className='flex justify-end'>
                <IoIosClose className=' text-3xl text-right' onClick={() => setOpenSearch(false)} />
            </div>
            <div className='flex-row justify-center text-center'>
                <input placeholder='Search...' className='border p-3 mt-5 rounded-lg' />
            </div>
        </div>
    }
    return (
        <div className='border-b-2 p-5 md:px-10 '>
            <div className='flex justify-between items-center md:w-[75%] m-auto'>
                <div className='text-2xl font-semibold text-gray-600'>News App</div>
                <div className='flex gap-5'>
                    {nav_links?.map((item, index) => {
                        return (
                            <div key={index} className=' text-md hidden md:block '>{item?.name}</div>
                        )
                    })}
                </div>
                <div className='flex gap-2'>
                    <FaBars className=' md:hidden' onClick={() => setOpenMenu(true)} />
                    <FaSearch className='' onClick={() => setOpenSearch(true)} />
                </div>
            </div>

        </div>
    )
}

export default Navbar