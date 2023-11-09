import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundLines from '@images/background-lines.svg'

const LetsConnect = () => {
    return (
        <section className="lets-connect">
            <img className="background-lines" src={BackgroundLines} alt="two white wavy lines"/>
            <div className="container">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <h1>Let´s Connect</h1>
            </div>
        </section>
    )
}

export default LetsConnect