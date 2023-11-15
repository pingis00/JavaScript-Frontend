import React from 'react'
import SocialMediaIcons from '@generics/SocialMediaIcons'

const Footer = () => {
    return (
        <footer>  
            <div className="container">
                <p>&copy;2023 Crito-Consulting Company Inc. All rights reserved.</p>
                <SocialMediaIcons className="social-media" />
            </div>
        </footer>
    )
}

export default Footer