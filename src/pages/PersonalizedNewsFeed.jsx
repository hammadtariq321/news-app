import React, { useState } from 'react';
import { useFetchArticlesQuery, useFetchSectionsQuery, useFetchAuthorsQuery, useFetchSourcesQuery } from '../store/services/guardianApi';
import Navbar from '../components/Navbar';
import ArticleList from '../components/ArticleList';

const PersonalizedNewsFeed = () => {
    const [preferences, setPreferences] = useState({
        keyword: '',
        fromDate: '',
        toDate: '',
        section: '',
        sources: '',
        authors: '',
        page: 1,
        pageSize: 12
    });

    const { data: sectionsData } = useFetchSectionsQuery();
    const { data: authorsData } = useFetchAuthorsQuery();
    const { data: sourcesData } = useFetchSourcesQuery();
    const { data: articlesData, error, isLoading } = useFetchArticlesQuery(preferences);

    const articles = articlesData?.response?.results || [];
    console.log("🚀 ~ PersonalizedNewsFeed ~ articles:", articles)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPreferences({ ...preferences, [name]: value, page: 1 });
    };

    const loadMoreArticles = () => {
        setPreferences(prev => ({ ...prev, page: prev.page + 1 }));
    };

    return (
        <main className='p-5 justify-center md:w-[75%] m-auto'>
            <div className=''>
                <h1 className='font-bold text-5xl py-8 italic text-center'>Personalized Feed</h1>
                <div className='flex flex-wrap gap-4 mb-8'>
                    <input
                        type='text'
                        name='keyword'
                        placeholder='Search by keyword'
                        value={preferences.keyword}
                        onChange={handleInputChange}
                        className='p-2 border rounded'
                    />
                    <input
                        type='date'
                        name='fromDate'
                        placeholder='From date'
                        value={preferences.fromDate}
                        onChange={handleInputChange}
                        className='p-2 border rounded'
                    />
                    <input
                        type='date'
                        name='toDate'
                        placeholder='To date'
                        value={preferences.toDate}
                        onChange={handleInputChange}
                        className='p-2 border rounded'
                    />
                    <select
                        name='section'
                        value={preferences.section}
                        onChange={handleInputChange}
                        className='p-2 border rounded'
                    >
                        <option value=''>All Sections</option>
                        {sectionsData?.response?.results.map(section => (
                            <option key={section.id} value={section.id}>{section.webTitle}</option>
                        ))}
                    </select>
                    <select
                        name='sources'
                        value={preferences.sources}
                        onChange={handleInputChange}
                        className='p-2 border rounded'
                    >
                        <option value=''>All Sources</option>
                        {sourcesData?.response?.results.map(source => (
                            <option key={source.id} value={source.id}>{source.webTitle}</option>
                        ))}
                    </select>
                    <select
                        name='authors'
                        value={preferences.authors}
                        onChange={handleInputChange}
                        className='p-2 border rounded'
                    >
                        <option value=''>All Authors</option>
                        {authorsData?.response?.results.map(author => (
                            <option key={author.id} value={author.id}>{author.webTitle}</option>
                        ))}
                    </select>
                </div>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                <ArticleList articles={articles} />
            </div>
        </main>
    );
};

export default PersonalizedNewsFeed;
