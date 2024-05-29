import React from 'react'

const Banner = () => {
    return (
        <div className='group cursor-pointer z-40'>
            <div className="overflow-hidden  shadow-lg w-full justify-center">
                <img
                    src="https://new.axilthemes.com/demo/react/papr/images/posts/post_1.jpg?imwidth=1080"
                    alt="Sample"
                    className="transform transition duration-500 hover:scale-110 object-cover m-auto w-full z-40"
                />
            </div>
            <div>
                <h1 className='text-xl mt-3 font-semibold md:text-2xl transition duration-500  group-hover:underline tracking-wide '>VR Is the Use of Computer Technology to Create a Simulated Environment.</h1>
                <div className='flex gap-3 mt-3'>
                    <p className='text-gray-500 font-light'>BY Hammad Tariq</p>
                    <p className='text-gray-500 font-light'>June 25, 2024</p>
                </div>
            </div>
        </div>
    )
}

export default Banner