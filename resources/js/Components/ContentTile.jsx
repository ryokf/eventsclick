import React from 'react'

const ContentTile = () => {
    return (
        <div className="">
            <div className="w-full aspect-video bg-gray-300 rounded-lg">
                <iframe src="" frameborder="0" className="w-full h-full"></iframe>
            </div>
            <div className="mt-1">
                <p className="text-xs text-primary">Category</p>
                <h1 className="text-sm">Lorem ipsum dolor sit</h1>
                <p className="text-xs text-gray-400">15 September 2022</p>
            </div>
        </div>
    )
}

export default ContentTile
