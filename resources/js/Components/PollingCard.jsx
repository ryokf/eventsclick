
"use client";

import { Card, Radio } from "flowbite-react";
import { useState } from "react";

export function PollingCard({question, image, voter_count = 0, options}) {
    const [Answered, setAnswered] = useState()

    return (
        <div className="w-60 aspect-[9/16] py-2 px-3 rounded-lg border">
            <div className="rounded-lg overflow-hidden">
                <img src={image} alt="" />
            </div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-400 my-2">
                {question}
            </p>
            <div className="flex items-center text-xs mb-3 text-gray-500">
                <p>{voter_count} pemilih</p>
                <p> • </p>
                <p>5 hari lalu</p>
            </div>

            <div className="">
                {
                    options.map((item, index) => (
                        item.answers != null &&
                        <PollingOption onClick={() => setAnswered(index)} answered={Answered === index} answer={item.answers} key={item.id} />
                    ))
                }
            </div>
        </div>
    );
}

const PollingOption = ({answer, index, answered, onClick}) => {
    return (
        <button onClick={() => onClick()} className={`w-full p-2 mb-3 rounded-lg border border-primary block text-left ${answered ? 'bg-primary text-white' : 'text-gray-700'}`}>
            <p className="text-xs">{answer}</p>
        </button>
    )
}
