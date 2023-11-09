import React from 'react'
import { Link } from 'react-router-dom'
import Image25Mar from '@images/25-mar.png'
import Image17Mar from '@images/17-mar.png'
import Image13Mar from '@images/13-mar.png'

const articleList = [
    {
        linkTo: '/digitalization', img: Image25Mar, alt: 'image of a woman sitting at a table smiling', title: 'Business', 
        headline: 'How To Use Digitalization In The Classroom', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.'
    },
    {
        linkTo: '/chatgpt', img: Image17Mar, alt: 'image of a part of a cumputer-screen', title: 'Business', 
        headline: 'How To Implement Chat GPT In Your Projects', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.'
    },
    {
        linkTo: '/moderncssdesign', img: Image13Mar, alt: 'image of two books, CSS and Javascript', title: 'Business', 
        headline: 'The Guide To Support Modern CSS Design', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.'
    }
]

const Articles = () => {
    return (
        articleList.map((article, index) => (
            <article key={index}>
                <Link to={article.linkTo}>
                    <img src={article.img} alt={article.alt} />
                    <p>{article.title}</p>
                    <h3 className="h3-1">{article.headline}</h3>
                    <p className="text">{article.text}</p>
                </Link>
            </article> 
        ))
    )
}

export default Articles