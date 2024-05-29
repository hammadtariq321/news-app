import React from 'react'
import Navbar from './components/Navbar'
import { useGetPostsQuery } from './store/services/newsApi';

const App = () => {
  const obj = useGetPostsQuery();
  return (
    <main className=''>
      <Navbar />
    </main>
  )
}

export default App