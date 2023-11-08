import React from 'react'
import { Link } from 'react-router-dom'
import GreyPlus from '@images/grey-plus.svg'
import HandIcon from '@images/icon-hand.svg'
import LampIcon from '@images/icon-lamp.svg'
import ChartIcon from '@images/icon-chart.svg'
import BoxIcon from '@images/icon-box.svg'

const featureList = [
    {linkTo: '/businessadvice', imgSrc: HandIcon, alt: 'icon of a handshake', title: 'Business Advice', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
    {linkTo: '/startupbusiness', imgSrc: LampIcon, alt: 'icon of a lamp', title: 'Startup business', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
    {linkTo: '/financialadvice', imgSrc: ChartIcon, alt: 'icon of a chart', title: 'Financial Advice', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
    {linkTo: '/riskmanagement', imgSrc: BoxIcon, alt: 'icon of a box', title: 'Risk management', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
]

const FeatureItem = () => {
  return (
    <div className="features-text">
        {
            featureList.map((feature, index) => (
                <div className='feature-item' key={index}>
                    <div className='icons'>
                        <img className='feature-icon' src={feature.imgSrc} alt={feature.alt} />
                        <img className=" plus-sign plus-sign-1" src={GreyPlus} alt="" />
                        <img className="plus-sign plus-sign-2" src={GreyPlus} alt="" />
                        <img className="plus-sign plus-sign-3" src={GreyPlus} alt="" />
                    </div>
                    <Link to={feature.linkTo}> 
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default FeatureItem