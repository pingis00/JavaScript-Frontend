import React, { useState } from 'react'
import BackgroundlinesWhite from '@images/background-lines-white.svg'
import ServiceBox from './ServiceBox'
import SectionTitle from '../generics/SectionTitle'
import Buttons from '../generics/Buttons'

const OurServices = () => {

    const [services] = useState([
        {title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus", url: "/services/businessadvice" },
        {title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus", url: "/services/startupbusiness" },
        {title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus", url: "/services/financialadvice" },
        {title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus", url: "/services/riskmanagement" }
    ]) 

    return (
        <section className="our-services">
            <img className="background-lines-white" src={BackgroundlinesWhite} alt="two white wavy lines" />
            <div className="container">
                <SectionTitle title="Our Services" headline="We Provide The Best Consulting Services" />
                <div className="services">
                    {
                        services.map((service, index) => (
                            <ServiceBox key={index} title={service.title} description={service.description} url={service.url} />
                        ))
                    }
                </div>
                <div className="center-content">
                    <Buttons type="transparent" title="Browse Services" url="browse-services" />
                </div>
            </div>
        </section>
    )
}

export default OurServices