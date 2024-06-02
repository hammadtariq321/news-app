import React, { useState, useEffect } from 'react';
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
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        if (articlesData?.response?.results) {
            setArticles(prevArticles => [...prevArticles, ...articlesData.response.results]);
        }
    }, [articlesData]);

    const handleSearch = (keyword) => {
        setSearchParams({ ...searchParams, keyword, page: 1 });
        setArticles([]);
    };

    const handleFilter = (filters) => {
        setSearchParams({ ...searchParams, ...filters, page: 1 });
        setArticles([]);
    };

    const loadMoreArticles = () => {
        setSearchParams(prevParams => ({ ...prevParams, page: prevParams.page + 1 }));
    };

    return (
        <main className='p-5 justify-center md:w-[75%] m-auto'>
            <Navbar />
            <div className=''>
                <h1 className='font-bold text-5xl py-8 italic text-center'>Top Articles</h1>
                {/* <SearchBar onSearch={handleSearch} /> */}
                <Filters onFilter={handleFilter} />
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                <ArticleList articles={articles} />
                {articlesData?.response?.pages > searchParams.page && (
                    <div className='text-center'>
                        <button
                            onClick={loadMoreArticles}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
};

export default ArticlesPage;
