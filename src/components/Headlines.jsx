import React from 'react';
import { useGetTopHeadlinesQuery } from '../store/services/newsApi';

const Headlines = ({ category, country }) => {
    const { data, error, isLoading } = useGetTopHeadlinesQuery({ category, country });
    console.log("🚀 ~ Headlines ~ data:", data);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading news.</div>;

    return (
        <div className="flex flex-wrap gap-4">
            {data.articles.map((article) => {
                if (article?.content === "[Removed]") {
                    return
                }
                return <div key={article.url} className="max-w-sm w-full lg:max-w-full lg:flex border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${article.urlToImage})` }} title={article.title}>
                    </div>
                    <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
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
            })}
        </div>
    );
};

export default Headlines;
