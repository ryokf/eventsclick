
"use client";

import { Card } from "flowbite-react";

export function PollingCard() {
    return (
        <div className="w-60 aspect-[9/16] py-2 px-3 rounded-lg border">
            <div className="rounded-lg overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-400 my-2">
                Here are the biggest enterprise technology acquisitions of 2021
            </p>
            <div className="flex items-center text-xs mb-3 text-gray-500">
                <p>252 pemilih</p>
                <p> • </p>
                <p>5 hari lalu</p>
            </div>

            <div className="">
                {
                    [1, 2, 3, 4].map((item) => (
                        <PollingOption key={item} />
                    ))
                }
            </div>
        </div>
    );
}

const PollingOption = () => {
    return (
        <div className="w-full p-2 mb-3 rounded-lg border border-primary">
            <p className="text-xs text-gray-700">Lorem ipsum dolor sit amet.</p>
        </div>
    )
}
