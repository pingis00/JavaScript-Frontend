import React from 'react'
import { useArticles } from '../../contexts/ArticleContext'

const NewsAndArticles = () => {
    const {articles} = useArticles()
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const day = date.getDate()
        const month = date.toLocaleString('sv-SE', { month: 'short' }).replace('.', '')
        return { day, month }
    }

  return (
    <section className='article-and-news'>
        <div className='container'>
            <h2>Our News & Articles</h2>
            <div className='articles'>
                {
                articles.map(article => (
                    <div key={article.id} className='article'>
                        <div className='images'>
                            <img src={article.imageUrl} alt={article.title} />
                            <div className='date'>
                                <span className="day">{formatDate(article.published).day}</span>
                                <span className="month">{formatDate(article.published).month}</span>
                            </div>
                        </div>
                        <p>{article.category}</p>
                        <h3>{article.title}</h3>
                        <p className='text'>{article.content}</p>
                    </div>
                ))
                }
            </div>
        </div>
    </section>
  )
}

export default NewsAndArticles