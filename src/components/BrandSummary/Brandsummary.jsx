import React from 'react'
import Info from './Info'
import BackgroundlinesGrey from '@images/background-lines-grey.svg'
import LogoFooter from '@images/logo-footer.svg'



const Brandsummary = () => {
    return (
        <section className="brand-summary">
            <img className="background-lines-grey" src={BackgroundlinesGrey} alt="" />
            <div className="container">
                <div className="brand-text">
                    <img src={LogoFooter} alt="" />
                    <p> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Placeat obcaecati voluptas
                        voluptates! Voluptates laborum nam
                        ratione minus necessitatibus, iure
                        praesentium.
                    </p>
                </div>
                <div className="company-info">
                    <Info />
                </div>
            </div>
        </section>
    )
}

export default Brandsummary