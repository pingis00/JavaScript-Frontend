import React from 'react'
import Header from '../components/Header/Header'
import NewsSection from '../components/NewsSection/NewsSection'
import Newsletter from '../components/Newsletter/Newsletter'
import BrandSummary from '../components/BrandSummary/Brandsummary'
import Footer from '../components/Footer/Footer'
import NewsAndArticles from '../components/NewsAndArticles/NewsAndArticles'

const News = () => {
  return (
        <>
            <Header />
            <NewsSection />
            <NewsAndArticles />
            <Newsletter />
            <BrandSummary />
            <Footer />
        </>
    )
}

export default News