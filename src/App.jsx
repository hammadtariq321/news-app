import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import { useFetchArticlesQuery } from './store/services/guardianApi';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import ArticleList from './components/ArticleList';

const App = () => {
  const [searchParams, setSearchParams] = useState({
    keyword: '',
    fromDate: '',
    toDate: '',
    section: '',
    page: 1,
    pageSize: 10
  });

  const { data: articlesData, error, isLoading } = useFetchArticlesQuery(searchParams);
  const articles = articlesData?.response?.results || [];

  const handleSearch = (keyword) => {
    setSearchParams({ ...searchParams, keyword });
  };

  const handleFilter = (filters) => {
    setSearchParams({ ...searchParams, ...filters });
  };
  return (
    <main className='p-5 justify-center md:w-[75%] m-auto'>
      <div>
        <SearchBar onSearch={handleSearch} />
        <Filters onFilter={handleFilter} />
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <ArticleList articles={articles} />
      </div>
      {/* <div className='flex gap-3'> */}
      {/* <Banner />
        <Banner /> */}
      {/* </div> */}
    </main>
  )
}

export default App