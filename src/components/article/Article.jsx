import React from 'react';
import './article.css';

const Article = ({ imageUrl, title, date }) => {
    return (
        <article className='gpt3__blog-container_article'>
            <div className="gpt3__blog-container_article-image">
                <img src={imageUrl} alt="blog thumbnail" />
            </div>
            <div className="gpt3__blog-container_article-content">
                <div className="">
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </article>
    )
}

export default Article;
