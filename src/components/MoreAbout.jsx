import React from 'react'
import { Link } from 'react-router-dom';

export default function MoreAbout({ title, icon, to }) {
    return (
        <div className='flex'>
            <Link to={to}>
                <div>
                    <p className='dark:text-white text-red-500 hover:text-red-800 font-semibold text-lg p-3'>
                        <u>{title}</u>
                    </p>
                </div>
                <div>
                    {icon}
                </div>
            </Link>
        </div>
    );
}
