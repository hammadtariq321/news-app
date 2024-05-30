import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchArticlesQuery } from './store/services/guardianApi';

const ArticleDetail = () => {
    const { id } = useParams();
    const { data: articleData, error, isLoading } = useFetchArticlesQuery(id);
    const article = articleData?.response?.content;

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{article.webTitle}</h1>
            <img src={article.fields.thumbnail} alt={article.webTitle} className="w-full h-64 object-cover rounded-md mb-4" />
            <div className="prose">
                <p>{article.fields.bodyText}</p>
            </div>
        </div>
    );
};

export default ArticleDetail;
