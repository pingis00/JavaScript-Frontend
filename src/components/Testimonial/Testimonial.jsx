import React from 'react'
import SectionTitle from '@generics/SectionTitle'
import Buttons from '@generics/Buttons'
import Clients from './Clients'


const Testimonial = () => {
    return (
        <section className="testimonial">
            <div className="background">
                <div className="container">
                    <SectionTitle title="Testimonial" headline="What Our Client Say" />
                    <div className="clients">
                        <Clients />
                    </div>
                    <div className="center-content">
                        <Buttons type="black" url="/allreviews" title="All Reviews" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial