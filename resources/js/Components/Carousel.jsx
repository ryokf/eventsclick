"use client";

import dateFormat from "@/helpers/dateFormat";
import { Carousel as CarouselFB } from "flowbite-react";
import { isMobile } from 'react-device-detect';

export function Carousel({ headers }) {
    console.log(Object.keys(headers[1].comments).length)
    return (
        // <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <div className="w-full m-auto lg:aspect-[21/9] lg:max-h-fit h-full">
            <CarouselFB indicators={!isMobile} className="">
                {
                    headers.map((content) => {

                        let image_id = content.url_video.split(" ")[3];
                        image_id = image_id.split("/")[4];
                        image_id = image_id.split("?")[0];

                        console.log(content.created_at)

                        return (
                            <a href= {`/media/program/content/`} key={content.id} className="w-full h-full bg-cover z-10 absolute" style={{ backgroundImage: `url(https://i.ytimg.com/vi/${image_id}/maxresdefault.jpg)`}}>
                                <div className="w-full h-full bg-gradient-to-b from-transparent via-black/30 to-black/80 flex flex-col justify-between">
                                    <div className=""></div>
                                    <div className="m-3 lg:m-10">
                                        <h1 className="font-semibold lg:text-6xl lg:font-bold text-white mb-1">{content.title}</h1>
                                        <p className="text-xs lg:text-lg text-gray-300 leading-none">{content.content.slice(0, isMobile ? 50 : 110)}</p>
                                        <div className="flex w-full gap-3 lg:text-lg text-gray-300 text-xs mt-1">
                                            <p>{content.likes} suka</p> <p> {Object.keys(headers[1].comments).length} komentar </p> <p>{dateFormat(content.created_at)}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )
                    })

                }
            </CarouselFB>
        </div>
    );
}
