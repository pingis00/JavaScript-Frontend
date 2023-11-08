import React from 'react'

const socialMediaLinks = [
    { name: 'facebook', url: 'https://facebook.com', iconClass: 'fa-brands fa-facebook' },
    { name: 'twitter', url: 'https://twitter.com', iconClass: 'fa-brands fa-x-twitter' },
    { name: 'instagram', url: 'https://instagram.com', iconClass: 'fa-brands fa-instagram' },
    { name: 'linkedin', url: 'https://linkedin.com', iconClass: 'fa-brands fa-linkedin' }
]

const SocialMediaIcons = ({className}) => {
  return (
    <div className={className}>
        {
            socialMediaLinks.map((media, index) => (
                <a key={index} href={media.url} target='_blank' rel='noopener noreferrer'>
                    <i className={media.iconClass}></i>
                </a>
            ))
        }
    </div>
  )
}

export default SocialMediaIcons