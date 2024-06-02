import React, { useState } from 'react'
import { useFetchArticlesQuery } from '../store/services/guardianApi';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import ArticleList from '../components/ArticleList';

const ArticlesPage = () => {
    const [searchParams, setSearchParams] = useState({
        keyword: '',
        fromDate: '',
        toDate: '',
        section: '',
        page: 1,
        pageSize: 12
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
            <div className='p-5'>
                <h1 className='font-bold text-5xl py-5 italic text-center'>Top Articles</h1>
                <SearchBar onSearch={handleSearch} />
                {/* <Filters onFilter={handleFilter} /> */}
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                <ArticleList articles={articles} />
            </div>
        </main>
    )
}

export default ArticlesPage