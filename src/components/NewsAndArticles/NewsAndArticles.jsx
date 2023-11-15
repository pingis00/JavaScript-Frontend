import React from 'react'
import ArticleList from './ArticleList'

const NewsAndArticles = () => {

  return (
    <section className='article-and-news'>
        <div className='container'>
            <h2>Our News & Articles</h2>
            <div className='articles'>
            <ArticleList />
            </div> 
        </div>
    </section>
  )
}

export default NewsAndArticles