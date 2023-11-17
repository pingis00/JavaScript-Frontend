import React from 'react'
import Header from '../components/Header/Header'
import NewsSection from '../components/NewsSection/NewsSection'
import ArticlesSection from '../components/ArticlesSection/ArticlesSection'
import ArticleNews from '../components/ArticleNews/ArticleNews'
import Brandsummary from '../components/BrandSummary/Brandsummary'
import Footer from '../components/Footer/Footer'



const NewsDetails = () => {

    return (
        <>
            <Header />
            <NewsSection />
            <ArticlesSection />
            <ArticleNews backgroundColor='#F0EFE9' buttonType='btn-white'/>
            <Brandsummary />
            <Footer />
        </>
    )
}

export default NewsDetails