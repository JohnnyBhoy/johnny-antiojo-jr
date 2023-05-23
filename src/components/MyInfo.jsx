import React from 'react'

export default function MyInfo({ title, children, logo }) {
    return (
        <div>
            <h1 className="font-bold p-1 ml-2 dark:text-teal-500 text-blue-500 text-lg">{title}</h1>
            <span>
                {logo}
            </span>
            <span className="p-3 dark:text-teal-400 text-primary ml-10 space-y-3">
                {children}
            </span>
        </div>
    )
}
