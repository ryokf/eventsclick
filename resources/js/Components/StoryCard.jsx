import React from 'react'

const StoryCard = () => {
    return (
        <div style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')" }} className="w-48 lg:w-60 aspect-[9/16] bg-gray-300 rounded-lg bg-cover overflow-hidden">
            <div className="flex flex-col justify-between w-full aspect-[9/16] bg-gradient-to-b from-transparent via-black/30 to-black/80">
                <div className=""></div>
                <div className="m-3">
                    <h1 className="text-sm font-semibold text-white mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className="text-xs text-gray-400">01:15</p>
                </div>
            </div>
        </div>
    )
}

export default StoryCard
