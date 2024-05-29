import React from 'react'
import Navbar from './components/Navbar'
import { useGetPostsQuery } from './store/services/newsApi';

const App = () => {
  const obj = useGetPostsQuery();
  return (
    <main className=''>
      {/* <Navbar /> */}
      <h1>Hello world</h1>
    </main>
  )
}

export default App