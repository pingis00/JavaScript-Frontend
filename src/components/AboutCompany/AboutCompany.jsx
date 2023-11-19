import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from '@generics/Buttons'
import SectionTitle from '@generics/SectionTitle'
import FounderImage from '@images/Image-founder.png'
import WhiteLine from '@images/white-wavy-line.svg'

const AboutCompany = () => {
    return (
        <section className="about-company">
            <div className="container">            
                <div className="about-company-image">
                    <img className="founder-image" src={FounderImage} alt="image of a woman with a loptop in her hand in a corridor" />
                    <img className="wavy-lines" src={WhiteLine} alt="" />
                    <div className="founder-info">
                        <h4>Samantha Brown, <span>Founder</span></h4>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p> 
                    </div>
                </div>
                <div className="company-info">
                    <SectionTitle title="About company" headline="We Are Business Consulting & Credit Repair Experts" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        officiis quas assumenda esse obcaecati? Ex esse error voluptates iure
                        vel totam eos.<br /><br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse
                        quasi incidunt adipisci accusantium libero provident voluptate amet.
                    </p>
                    <div className="intro-buttons center-content">
                        <Buttons className='btn' type="black" title="Learn More" url="/learnmore" />
                        <Link to="/introvideo" className="btn-intro"><i className="fa-thin fa-circle-play"></i> Intro Video</Link>
                    </div>
                </div>   
            </div>  
        </section>
    )
}

export default AboutCompany