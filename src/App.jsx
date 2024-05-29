import React from 'react'
import Navbar from './components/Navbar'
import { useGetPostsQuery } from './store/services/newsApi';
import Banner from './components/Banner';

const App = () => {
  const obj = useGetPostsQuery();
  return (
    <main className='p-5 justify-center md:w-[75%] m-auto'>
      <div className='flex gap-3'>
        <Banner />
        <Banner />
      </div>
    </main>
  )
}

export default App