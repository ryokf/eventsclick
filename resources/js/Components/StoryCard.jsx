import React from 'react'

const StoryCard = ({title, url_video, image}) => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="w-48 lg:w-60 aspect-[9/16] bg-gray-300 rounded-lg bg-cover overflow-hidden">
            <div className="flex flex-col justify-between w-full aspect-[9/16] bg-gradient-to-b from-transparent via-black/30 to-black/80">
                <div className=""></div>
                <div className="m-3">
                    <h1 className="text-sm font-semibold text-white mb-1">{title}</h1>
                    <p className="text-xs text-gray-400">01:15</p>
                </div>
            </div>
        </div>
    )
}

export default StoryCard
