import React, { useState } from 'react';
import Links from '../Links/Links';



const MenuBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuBarClass = isMenuOpen ? "btnMenubars btnMenubarsOpen" : "btnMenubars btnMenubarsClosed"

    return (
        <>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={menuBarClass} >
                {isMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars-staggered"></i>}
            </button>
            {isMenuOpen && (
                <nav className='main-menu'>
                    <Links mode='menu'/>
                </nav>
            )}
        </>
    )
}

export default MenuBar