
"use client";

import { Card, Radio } from "flowbite-react";
import { useState } from "react";

export function PollingCard({ question, image, options }) {
    const [Answered, setAnswered] = useState(false)
    const [AllAnswered, setAllAnswered] = useState(false)

    // const totalVoters = options.reduce((prev, curr) => prev + curr.votes, 0)     
    // options.map((item, index) => {
    //     const totalVoters = options.reduce((prev, curr) => prev + curr.votes, 0)
    // })

    // console.log(totalVoters)

    // setAllAnswered(Answered)

    // console.log(options)

    const voter = options.reduce((prev, curr) => prev + curr.votes, 0);

    return (
        <div className="w-72 aspect-[9/16] py-2 px-3 rounded-lg border">
            <div className="rounded-lg overflow-hidden">
                <img src={image} alt="" />
            </div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-400 my-2">
                {question}
            </p>
            <div className="flex items-center text-xs mb-3 text-gray-500">
                <p>{voter} pemilih</p>
                <p> • </p>
                <p>5 hari lalu</p>
            </div>

            <button className={'block w-full'} onClick={() => setAllAnswered(true)}>
                {
                    options.map((item, index) => (
                        item.answers != null &&
                        <PollingOption onClick={() => setAnswered(index)} answered={Answered === index} AllAnswered={AllAnswered} voter_count={item.votes} answer={item.answers} key={item.id} />
                    ))
                }
            </button>
        </div>
    );
}

const PollingOption = ({ answer, index, answered, voter_count, onClick, AllAnswered }) => {
    return (
        <button onClick={() => onClick()} className={`w-full text-xs text-start p-2 mb-3 rounded-lg border border-primary flex justify-between ${ answered ? 'bg-primary text-white' : 'text-gray-700' }`}>
            <span className="">{answer}</span>
            {
                AllAnswered &&
                <span>{voter_count} pemilih</span>
            }
        </button>
    )
}
