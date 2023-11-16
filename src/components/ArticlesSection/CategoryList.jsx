import React from 'react'
import { Link } from 'react-router-dom'


const CategoryList = () => {
    const categoryLinks = [
        { category: 'Företag', posts: '20', linkTo: '/businesspost' },
        { category: 'IT', posts: '7', linkTo: '/itpost' },
        { category: 'Utbildning', posts: '16', linkTo: '/educationpost' },
        { category: 'Teknologi', posts: '11', linkTo: '/technologypost' },
        { category: 'Frilansande', posts: '35', linkTo: '/freelancingpost' },
        { category: 'Marknadsföring', posts: '14', linkTo: '/marketingpost' }
    ]

  return (
    <ul className='list'>
        {
            categoryLinks.map((item, index) => (
                <Link key={index} to={item.linkTo} className='links'>
                    <li className='items'>
                        <p>{item.category}</p> - <span>{item.posts} Posts</span> 
                    </li>
                </Link>
            ))
        }
    </ul> 
  )
}

export default CategoryList