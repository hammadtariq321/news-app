import React from 'react'
import { useGetNewsByIdQuery } from '../store/services/newsApi';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const NewsDetailPage = () => {
    const { newsId } = useParams();
    console.log("🚀 ~ NewsDetailPage ~ newsId:", newsId)
    const { data, error, isLoading } = useGetNewsByIdQuery(newsId);
    console.log("🚀 ~ NewsDetailPage ~ data:", data)

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading news article.</div>;

    const article = data?.articles[0];

    if (!article) return <div>Article not found.</div>;

    return (
        <main className='p-5 justify-center md:w-[75%] m-auto'>
            <Navbar />
            <div className="max-w-2xl mx-auto mt-5">
                <img src={article.urlToImage} alt={article.title} className="w-full h-64 object-cover rounded-md mb-4" />
                <h2 className="text-2xl font-semibold mb-4">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.author}</p>
                <div className="text-gray-800">
                    {article.content}
                </div>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">
                    Read More
                </a>
            </div>
        </main>
    );
}

export default NewsDetailPage