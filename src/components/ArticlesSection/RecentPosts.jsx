import React from 'react'
import { Link } from 'react-router-dom'

const RecentPosts = () => {
    const postList = [
        {headline: 'Hur man blåser igenom kapital i en otrolig takt', date: 'Jan 14, 2020', linkTo: '/post1'},
        {headline: 'Designstudior som alla borde känna till? ', date: 'Jan 14, 2020', linkTo: '/post2'},
        {headline: 'Hur fick vi över 1 miljon besökare på 30 dagar utan någonting!', date: 'Jan 14, 2020', linkTo: '/post3'},
        {headline: 'Figma: Hur vi byggde vårt webbdesignsystem', date: 'Jan 14, 2020', linkTo: '/post4'}
    ]

  return (
    <ul className='posts'>
        {
            postList.map((item, index) => (
                <Link key={index} to={item.linkTo} className='list-post'>
                    <li className='post'>
                        <h5>{item.headline}</h5>
                        <p>{item.date}</p>
                    </li>
                </Link>
            ))
        }
    </ul>
  )
}

export default RecentPosts