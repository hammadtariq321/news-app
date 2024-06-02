import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Headlines from '../components/Headlines'

const HomePage = () => {
    return (
        <main className='p-5 justify-center md:w-[75%] m-auto'>
            <Navbar />

            <h1 className='font-bold text-5xl py-5 italic text-center'>Top Headlines</h1>
            <Headlines category="technology" country="us" />
        </main>
    )
}

export default HomePage