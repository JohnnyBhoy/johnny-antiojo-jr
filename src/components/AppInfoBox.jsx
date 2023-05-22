import React from 'react'

export default function AppInfoBox({ title, count }) {
    return (
        <div className='dark:bg-secondary bg-white shadow-xl p-5 rounded mt-2'>
            <h1 className='dark:text-white text-primary text-2xl font-semibold p-3 mb-2'>
                {title}
            </h1>
            <p className='text-xl dark:text-white text-primary ml-3'>
                {count}
            </p>
        </div>
    )
}
