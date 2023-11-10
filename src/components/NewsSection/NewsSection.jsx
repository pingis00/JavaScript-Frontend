import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundLines from '@images/background-lines.svg'

const NewsSection = () => {
    return (
        <section className="news-section">
            <img className="background-lines" src={BackgroundLines} alt="two white wavy lines"/>
            <div className="container">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/news">News</Link>
                </nav>
                <h1>News & Articles</h1>
            </div>
        </section>
    )
}

export default NewsSection