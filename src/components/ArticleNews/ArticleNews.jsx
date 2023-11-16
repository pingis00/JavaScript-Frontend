import React from 'react'
import 'react-multi-carousel/lib/styles.css';

import Carousel from 'react-multi-carousel';
import SectionTitle from '@generics/SectionTitle'
import Buttons from '@generics/Buttons'
import ArticleList from '../ArticleList/ArticleList'
import { useArticles } from '../../contexts/ArticleContext';


const ArticleNews = () => {
    const { articles } = useArticles()

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1200 },
          items: 3,
        },
        desktop: {
          breakpoint: { max: 1199, min: 992 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 991, min: 768 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 767, min: 568 },
          items: 2, 
        },
        mini: {
            breakpoint: { max: 567, min: 0 },
            items: 2,
        }
      };
    return (
        <section className="article-news">
            <div className="container">
                <div className="intro-title">
                    <SectionTitle title="Article & News" headline="Get Every Single Article & News" />
                    <div className='center-content'>
                        <Buttons className="btn-browse-articles" type="transparent" title="Browse Articles" url="/News"/>
                    </div>
                </div>
                <Carousel 
                responsive={responsive}
                showDots={true}
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass='carousel'
                dotListClass='custom-dot-style'
                renderDotsOutside={true}
                >
                    {
                        articles.map((article, index) => (
                            <ArticleList key={index} articles={[article]} />
                        ))
                    }    
                </Carousel>
            </div>
        </section>
    )
}

export default ArticleNews