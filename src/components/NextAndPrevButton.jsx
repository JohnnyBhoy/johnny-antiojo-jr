import React from 'react'

export default function NextAndPrevButton({ className = "", onPrevClick, onNextClick }) {
    const getClasses = () => {
        return 'flex justify-end item-center space-x-3 p-2 mt-3 font-semibold';
    }

    return (
        <div className={getClasses() + className} >
            <Button onClick={onPrevClick} title="Prev" />
            <Button onClick={onNextClick} title="Next" />
        </div>
    )
}

const Button = ({ onClick, title }) => {
    return (
        <button onClick={onClick} type="button" className="text-primary dark:text-white hover:underline">
            {title}
        </button>
    )
}
