import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import { useFetchArticlesQuery } from './store/services/guardianApi';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import ArticleList from './components/ArticleList';
import Headlines from './components/Headlines';
import NewsSources from './components/NewsSources';
import SearchNews from './components/SearchNews';

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
      <Navbar />
      <div>
        <SearchBar onSearch={handleSearch} />
        <Filters onFilter={handleFilter} />
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {/* <ArticleList articles={articles} /> */}
        {/* <Headlines category="technology" country="us" /> */}
        {/* <NewsSources /> */}
        {/* <SearchNews /> */}
      </div>
    </main>
  )
}

export default App