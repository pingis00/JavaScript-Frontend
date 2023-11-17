import React from 'react'
import { NavLink } from 'react-router-dom'

const linkList = [
    { linkTo: '/', title: 'Home' },
    { linkTo: '/services', title: 'Services'  },
    { linkTo: '/news', title: 'News'  },
    { linkTo: '/contact', title: 'Contact'  }
]

const Links = ({ mode }) => {
    const linkClass = mode === 'menu' ? 'links-mobile' : 'links-big-screen'

  return (
    linkList.map ((item, index) => (
        <NavLink key={index} to={item.linkTo} className={linkClass}>
            {item.title}
        </NavLink>
    ))
  )
}

export default Links