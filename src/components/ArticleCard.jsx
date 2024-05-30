import React from 'react';

const ArticleCard = ({ article }) => {
    const { webTitle, fields } = article;
    return (
        <div>
            <img src={fields.thumbnail} alt={webTitle} />
            <h2>{webTitle}</h2>
            <p>{fields.byline}</p>
        </div>
    );
};

export default ArticleCard;
