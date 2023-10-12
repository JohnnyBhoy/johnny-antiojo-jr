import React from 'react'
import PageContainer from '../PageContainer'
import LeftPic from '../pages/LeftPic'

export default function AboutMe() {
    return (
        < div className="grid grid-cols-2">
        <LeftPic />
        <div className="justify-center mt-14 relative overflow-hidden shadow-lg cursor-pointer">
            About you
        </div>
        </div>
    )
}
