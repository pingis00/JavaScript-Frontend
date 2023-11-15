import React from 'react'
import { useArticles } from '../../contexts/ArticleContext'
import { NavLink } from 'react-router-dom'


const ArticleList = () => {
    const {articles} = useArticles()
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const day = date.getDate()
        const month = date.toLocaleString('sv-SE', { month: 'short' }).replace('.', '')
        return { day, month }
    }

  return (
    <>
        {
        articles.map(article => (
            <div key={article.id} className='article'>
                <NavLink to={`/newsDetails/${article.id}`}>
                    <div className='article-images'>
                        <img src={article.imageUrl} alt={article.title} />
                        <div className='article-date'>
                            <span className="day">{formatDate(article.published).day}</span>
                            <span className="month">{formatDate(article.published).month}</span>
                        </div>
                    </div>
                    <div className='article-body'>
                        <p className='article-category'>{article.category}</p>
                        <h3 className='article-title'>{article.title}</h3>
                        <p className='article-content'>{article.content}</p>
                    </div>
 
                </NavLink>
            </div>
        ))
        }
    </>
  )
}

export default ArticleList