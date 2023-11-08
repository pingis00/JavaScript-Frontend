import React from 'react'
import SectionTitle from '@generics/SectionTitle'
import ImageWomen from '@images/Image-women.png'
import WhyUsFeatures from './WhyUsFeatures'

const WhyUs = () => {
    return (
        <section className="why-us">
        <div className="background-field"></div>
        <div className="container">  
            <div className="why-choose-us">
                <SectionTitle title="Why Choose Us" headline="Why We Are The Best Business Consulting Agency" />
                <div className="why-us-features">
                    <WhyUsFeatures />
                </div>
            </div>
            <div className="image">
                <img src={ImageWomen} alt="image of two women sitting at a table" />
            </div>     
        </div>
    </section>
    )
}

export default WhyUs