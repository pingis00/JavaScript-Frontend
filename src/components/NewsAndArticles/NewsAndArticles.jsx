import React from 'react'
import ArticleList from '../ArticleList/ArticleList'
import { useArticles } from '../../contexts/ArticleContext'
import ErrorMessages from '../generics/ErrorMessages'

const NewsAndArticles = () => {
  const { articles, error } = useArticles()

    return (
        <section className='article-and-news'>
            <div className='container'>
                <h2>Our News & Articles</h2>
                {error ? (
                <ErrorMessages message={error} />
                ) : (
                <ArticleList articles={articles} />
                )}
            </div>
        </section>
    )
}

export default NewsAndArticles