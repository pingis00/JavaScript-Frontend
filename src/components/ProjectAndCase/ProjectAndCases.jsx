import React from 'react'
import { Link } from 'react-router-dom'
import ArticleImage1 from '@images/article-image-1.png'
import ArticleImage2 from '@images/article-image-2.png'
import ArticleImage3 from '@images/article-image-3.png'
import ArticleImage4 from '@images/article-image-4.png'

const projectList = [
    {linkTo: '/growyourbusiness', img: ArticleImage1, alt: 'A mans hand reading business paper', title: 'Grow your business' },
    {linkTo: '/responsivewebsite', img: ArticleImage2, alt: 'Pink apple products on a desk', title: 'Why your client needs a responsive website' },
    {linkTo: '/educateyouremployees', img: ArticleImage3, alt: 'Desk with office supplies', title: 'Educate your employees to get better results' },
    {linkTo: '/businessinsight', img: ArticleImage4, alt: 'Laptop with business Intelligence insights', title: 'Business Insights is a important piece of your business' }
]

const ProjectAndCases = () => {
    return (
        <div className="project-and-cases">
            {
                projectList.map((project, index) => (
                    <Link key={index} className="project" to={project.linkTo}>
                    <img src={project.img} alt={project.alt} />
                    <h3>{project.title}</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </Link>
                ))
            }
        </div>
    )
}

export default ProjectAndCases