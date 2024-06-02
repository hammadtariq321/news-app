import React from 'react'
import SearchNews from '../components/SearchNews'
import Navbar from '../components/Navbar'

const SearchNewsPage = () => {
    return (
        <main className='p-5 justify-center md:w-[75%] m-auto'>
            <Navbar />

            <h1 className='font-bold text-5xl py-8 italic text-center'>Search News</h1>
            <SearchNews />
        </main>
    )
}

export default SearchNewsPage