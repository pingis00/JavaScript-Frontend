import React from 'react'
import Header from '../components/Header/Header'
import Showcase from '../components/Showcase/Showcase'
import LogosSection from '../components/Logos/LogosSection'
import Features from '../components/Features/Features'
import AboutCompany from '../components/AboutCompany/AboutCompany'
import OurServices from '../components/OurServices/OurServices'
import WhyUs from '../components/WhyUs/WhyUs'
import ProjectAndCase from '../components/ProjectAndCase/ProjectAndCase'
import TeamIntroduction from '../components/TeamIntroduction/TeamIntroduction'
import Testimonial from '../components/Testimonial/Testimonial'
import ArticleNews from '../components/ArticleNews/ArticleNews'
import Newsletter from '../components/Newsletter/Newsletter'
import Brandsummary from '../components/BrandSummary/Brandsummary'
import Footer from '../components/Footer/Footer'



const Home = () => {
    return (
        <div className='wrapper-grid'>
            <Header />
            <Showcase />
            <LogosSection />
            <Features />
            <AboutCompany />
            <OurServices />
            <WhyUs />
            <ProjectAndCase />
            <TeamIntroduction />
            <Testimonial />
            <ArticleNews />
            <Newsletter />
            <Brandsummary />
            <Footer />
        </div>
    )
}

export default Home

