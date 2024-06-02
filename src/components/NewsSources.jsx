import React from 'react';
import { useGetSourcesQuery } from '../store/services/newsApi';

const NewsSources = () => {
    const { data, error, isLoading } = useGetSourcesQuery();
    console.log("🚀 ~ NewsSources ~ data:", data)

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading sources.</div>;

    return (
        <div className="my-4">
            <h2 className="text-2xl font-bold mb-4">News Sources</h2>
            <ul className="list-none p-0">
                {data.sources.map((source) => (
                    <li key={source.id} className="mb-2">
                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800">
                            {source.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsSources;
