import React, { useState } from 'react';
import { useSearchNewsQuery } from '../store/services/newsApi';

const SearchNews = () => {
    const [query, setQuery] = useState('');
    const { data, error, isLoading } = useSearchNewsQuery(query, { skip: !query });

    const handleSearch = (e) => {
        e.preventDefault();
        setQuery(e.target.elements.search.value);
    };

    return (
        <div className="my-4">
            <form onSubmit={handleSearch} className="flex mb-4 ">
                <input
                    type="text"
                    name="search"
                    placeholder="Search news..."
                    className="flex-grow p-2 border rounded"
                />
                <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">Search</button>
            </form>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error loading news.</div>}
            {data && (
                <div className="flex flex-wrap gap-4">
                    {data.articles.map((article) => (
                        <div key={article.url} className="max-w-sm w-full lg:max-w-full lg:flex">
                            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${article.urlToImage})` }} title={article.title}>
                            </div>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <h3 className="text-gray-900 font-bold text-xl mb-2">{article.title}</h3>
                                    <p className="text-gray-700 text-base">{article.description}</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">{article.author || 'Unknown Author'}</p>
                                        <p className="text-gray-600">{new Date(article.publishedAt).toLocaleDateString()}</p>
                                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800">
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchNews;
