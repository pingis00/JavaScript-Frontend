import React from 'react'
import backgroundlines from '@images/background-lines.svg'
import image from '@images/image.svg'
import Buttons from '@generics/Buttons'

const Showcase = () => {
    return (
        <section className="showcase">
            <img className="background-lines" src={backgroundlines} alt="two white wavy lines in the bottom left" />
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <Buttons title="Get Consulting" url="/getconsulting" />
                    <Buttons type="transparent" title="Learn More" url="/learnmore" />
                </div>
                <img src={image} alt="image of a man in a suit with a tablet" />
            </div>
        </section>
    )
}

export default Showcase

