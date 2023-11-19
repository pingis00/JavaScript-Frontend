import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import SectionTitle from '@generics/SectionTitle'
import Buttons from '@generics/Buttons'
import ArticleList from '../ArticleList/ArticleList'
import { useArticles } from '../../contexts/ArticleContext';
import ErrorMessages from '../generics/ErrorMessages';


const ArticleNews = ( { backgroundColor = '#ffffff', buttonType = 'btn-transparent' } ) => {
    const { articles, error } = useArticles()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,

        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <section className="article-news" style={{ backgroundColor: backgroundColor }}>
            <div className="container">
                <div className="intro-title">
                    <SectionTitle title="Article & News" headline="Get Every Single Article & News" />
                    <div className='center-content'>
                        <Buttons className={`btn-browse-articles ${buttonType}`} title="Browse Articles" url="/News"/>
                    </div>
                </div>
                {error ? (
                    <ErrorMessages message={error} />
                ) : (
                    <Slider className='custom-slider' {...settings}>
                        {
                            articles.map((article) => (
                                <ArticleList key={article.id} articles={[article]} />
                            ))
                        } 
                    </Slider>   
                )}

            </div>
        </section>
    )
}

export default ArticleNews