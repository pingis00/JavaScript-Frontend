import React, { useEffect } from 'react'
import { useArticles } from '../../contexts/ArticleContext'
import { useParams } from 'react-router-dom'
import Quote from '@images/quote.svg'
import CategoryTabs from './CategoryTabs'
import ArticleIntro from './ArticleIntro'
import Articletext from './Articletext'
import CategoryList from './CategoryList'
import RecentPosts from './RecentPosts'


const Articles = () => {

    const { article, getArticle, clearArticle } = useArticles()
    const {id} = useParams()

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' }
        const date = new Date(dateString)
        return new Intl.DateTimeFormat('en-US', options).format(date)
    }

    useEffect(() => {
        getArticle(id)

        return () => clearArticle()
    }, [])

    return (
        <div className='article-section'> 
            {
                article ?
                (
                    <div className='container'>
                        <section className='article'>
                            <div className='article-intro'>
                                <ArticleIntro article={article} formatDate={formatDate} />
                            </div>
                            <div className='text'>
                                <Articletext content={article.content} repeats={14} />
                            </div>
                            <blockquote className='quote'>
                                <img src={Quote} alt="" />
                                <p>
                                    <Articletext content={article.content} repeats={2} />
                                </p>
                            </blockquote>
                            <div className='text-2'>
                                <p>
                                    <Articletext content={article.content} repeats={4} />
                                </p>
                            </div>
                            <div className='category-tabs'>
                                <CategoryTabs />
                            </div>
                        </section>
                        <section className='side-section'>
                            <div className='search-bar'>
                                <input  type="text" placeholder='Type to search...' />
                                <i className="fa-regular fa-magnifying-glass"></i>
                            </div>
                            <div className='recent-posts'>
                                <h3>Recent Posts</h3>
                                <RecentPosts />
                            </div>
                            <div className='categories'>
                                <h3>Categories</h3>
                                <CategoryList />
                            </div>
                        </section>
                    </div>
                )
                :
                (
                    <div>Laddar</div>
                )
            }

        </div>
        
    )
}

export default Articles