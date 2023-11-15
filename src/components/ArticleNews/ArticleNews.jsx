import React from 'react'
import Dots from '@generics/Dots'
import SectionTitle from '@generics/SectionTitle'
import Buttons from '@generics/Buttons'
import Articles from './Articles'


const ArticleNews = () => {
    return (
        <section className="article-news">
            <div className="container">
                <div className="intro-title">
                    <SectionTitle title="Article & News" headline="Get Every Single Article & News" />
                    <div className='center-content'>
                        <Buttons type="transparent" title="Browse Articles" url="/News"/>
                    </div>
                </div>
                <div className="news">   
                    <Articles />
                </div>
                    <Dots count = {5} />
            </div>
        </section>
    )
}

export default ArticleNews