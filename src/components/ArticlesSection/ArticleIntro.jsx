import React from 'react'

const ArticleIntro = ({article, formatDate}) => {
    return (
        <>
            <h2>{article.title}</h2>
            <div className='article-metadata'>
                <time>{formatDate(article.published)}</time>
                <span className='dot'>•</span>
                <span className='company'>{article.category}</span>
                <span className='dot'>•</span>
                <span>{article.author}</span>
            </div>
            <div className='image-container'>
                <img src={article.imageUrl} alt="" />
            </div>
        </>
    )
}

export default ArticleIntro