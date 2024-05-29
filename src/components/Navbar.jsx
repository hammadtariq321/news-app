import React from 'react'

function Navbar() {
    const nav_links = [
        {
            'name': "Home",
            'link': "/",
        },
        {
            'name': "Technology",
            'link': "/technology",
        }
    ]
    return (
        <div className='border border-b-2 py-5 bg-[#f1f1f1] px-10'>
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-semibold text-gray-600'>News App</div>
                <div className='flex gap-5'>
                    {nav_links?.map((item, index) => {
                        return (
                            <div key={index} className='text-gray-600'>{item?.name}</div>
                        )
                    })}
                </div>
                <div>kasjd</div>
            </div>
        </div>
    )
}

export default Navbar