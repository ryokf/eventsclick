
"use client";

import { Carousel as CarouselFB } from "flowbite-react";

export function Carousel() {
    return (
        // <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <div className="w-full  m-auto lg:aspect-[21/9] lg:max-h-fit h-full">
            <CarouselFB indicators={false} className="!-z-10">
                <div className="w-full h-full bg-cover" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')" }}>
                    <div className="w-full h-full bg-gradient-to-b from-transparent via-black/30 to-black/80 flex flex-col justify-between">
                        <div className=""></div>
                        <div className="m-3 lg:m-10">
                            <h1 className="font-semibold lg:text-6xl lg:font-bold text-white mb-1">Lorem ipsum dolor sit amet.</h1>
                            <p className="text-xs lg:text-lg text-gray-300 leading-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsum sunt saepe.</p>
                            <div className="flex w-full gap-3 lg:text-lg text-gray-300 text-xs mt-1">
                                <p>252 suka</p> <p> 252 komentar </p> <p>5 hari lalu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CarouselFB>
        </div>
    );
}
