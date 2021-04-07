import React from 'react'

const title =  'Rick and Morty'
const subtitle = 'Hey, did you ever want to hold a Terry fold?'
const Header = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col h-1/4 bg-lightBackground">
            <h1 className="text-5xl font-semibold my-0">{title.toUpperCase()}</h1>
            <p className="bg-darkBackground text-orangeTexts text-xl font-semibold px-2 my-0">{subtitle.toUpperCase()}</p>
        </header>
    )
}

export default Header
