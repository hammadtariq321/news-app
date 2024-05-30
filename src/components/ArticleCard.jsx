import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
    const { id, webTitle, fields } = article;
    return (
        <div className="border border-gray-300 rounded-md p-4">
            <img src={fields.thumbnail} alt={webTitle} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2">{webTitle}</h2>
            <p className="text-gray-600">{fields.byline}</p>
            <Link to={`/article/${id}`} className="text-blue-500 hover:underline mt-2 block">Read More</Link>
        </div>
    );
};

export default ArticleCard;
