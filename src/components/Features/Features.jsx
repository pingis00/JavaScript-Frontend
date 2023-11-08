import React from 'react'
import SectionTitle from '@generics/SectionTitle'
import Buttons from '@generics/Buttons'
import FeatureItem from './FeatureItem'

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <div className='intro'>
                    <SectionTitle title="features" headline="Our Accunting is trusted by thousand of companies" />
                    <Buttons title="Learn More" url="/learnmore" className="btn" />
                </div>
                <FeatureItem />
            </div>
        </section>
    )
}

export default Features