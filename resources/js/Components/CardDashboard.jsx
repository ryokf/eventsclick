import React from 'react'

const CardDashboard = ({id, title = "", image = ""}) => {
    return (
        <a
            href={`/media/dashboard/program?id=${id}`}
            style={{ backgroundImage: `url(https://i.ytimg.com/vi/${image}/maxresdefault.jpg)`}}
            className="bg-cover w-full aspect-video rounded-lg overflow-hidden"
        >
            <div className="w-full h-full bg-black/50 flex justify-center items-center">
                <h1 className="text-sm max-w-36 font-semibold text-white text-center">{title}</h1>
            </div>
        </a>
    )
}

export default CardDashboard
