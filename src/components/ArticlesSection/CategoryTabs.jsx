import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
    { name: 'Digitalization', path: '/digitalization' },
    { name: 'School', path: '/school' },
    { name: 'IT', path: '/it' },
    { name: 'Design', path: '/design' },
    { name: 'Work', path: '/work' },
    { name: 'Tech', path: '/tech' }     
]

const CategoryTabs = () => {
    return (
        <>
            {
                categories.map((category, index) => (
                    <Link className='tab' key={index} to={category.path}>
                        {category.name}
                    </Link>
                ))
            }
        </>
        
    )
}

export default CategoryTabs