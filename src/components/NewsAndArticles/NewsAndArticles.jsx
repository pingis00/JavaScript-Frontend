import React from 'react'
import ArticleList from '../ArticleList/ArticleList'
import { useArticles } from '../../contexts/ArticleContext'

const NewsAndArticles = () => {
  const { articles } = useArticles()

    return (
        <section className='article-and-news'>
            <div className='container'>
                <h2>Our News & Articles</h2>
                <ArticleList articles={articles} />
            </div>
        </section>
    )
}

export default NewsAndArticles