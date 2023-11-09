import React from 'react'
import { Link } from 'react-router-dom'
import ThumbsUp from '@images/icon-thumbsup.svg'
import Diamond from '@images/icon-diamond.svg'
import Scale from '@images/icon-scale.svg'
import Ai from '@images/icon-ai.svg'


const whyUsList = [
    {linkTo: '/processexcellence', img: ThumbsUp, alt: 'image of a thumbs up', title: 'Process Excellence', description: 'Lorem, ipsum dolor sit amet consectetur.'},
    {linkTo: '/strategicplanning', img: Diamond, alt: 'image of a diamond', title: 'Strategic Planning', description: 'Lorem, ipsum dolor sit amet consectetur.'},
    {linkTo: '/experiencedesign', img: Scale, alt: 'image of a scale', title: 'Experience Design', description: 'Lorem, ipsum dolor sit amet consectetur.'},
    {linkTo: '/artificialintelligence', img: Ai, alt: 'image of a gear', title: 'Artificial Intelligence', description: 'Lorem, ipsum dolor sit amet consectetur.'},
]

const WhyUsFeatures = () => {
    return (
        whyUsList.map ((feature, index) => (
            <Link key={index} to={feature.linkTo} className="why-us-feature-item">
            <img src={feature.img} alt={feature.alt} />
            <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
            </div>   
            </Link>
        ))
    )
}

export default WhyUsFeatures

