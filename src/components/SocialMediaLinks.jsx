import React from 'react'

export default function SocialMediaLinks({ image, links }) {
    return (
        <div>
            <a href={links}>
                <img src={image}
                    className='h-10 rounded-lg transition duration-300 ease-in-out hover:scale-110'
                    alt='work'
                />
            </a>
        </div>
    )
}
