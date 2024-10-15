"use client";

import { Link, router } from "@inertiajs/react";
import { Card, Radio } from "flowbite-react";
import { useState } from "react";

export function PollingCard({ id, question, image, options, created_at }) {
    console.log(id)
    const [answered, setAnswered] = useState(() => {
        const data = localStorage.getItem(`${ question }-polling`);
        return data ? JSON.parse(data) : "";
    })
    const [allAnswered, setAllAnswered] = useState(() => {
        const data = localStorage.getItem(`${ question }-polling-all`);
        return data ? JSON.parse(data) : "";
    })


    const voter = options.reduce((prev, curr) => prev + curr.votes, 0);

    const is_dashboard = window.location.href.split("/")[4] === 'dashboard';
    console.log(is_dashboard)

    const submit = (e, id) => {
        e.preventDefault();
        setAllAnswered(id);
        localStorage.setItem(`${ question }-polling`, JSON.stringify(answered));
        localStorage.setItem(`${ question }-polling-all`, JSON.stringify(allAnswered));
    }

    return (
        <div className="w-80 h-fit py-2 px-3 rounded-lg border">
            <div className="rounded-lg overflow-hidden">
                <img src={image} alt="" />
            </div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-400 my-2">
                {question}
            </p>
            <div className="flex items-center text-xs mb-3 gap-1 text-gray-500">
                <p>{voter} pemilih</p>
                <p> • </p>
                <p>{created_at}</p>
            </div>

            <button className={'block w-full'} onClick={(e) => submit(e, id)}>
                {
                    options.map((item, index) => (
                        item.answers != null &&
                        <PollingOption is_dashboard={is_dashboard} id={id} idAnswer={item.id} onClick={() => is_dashboard ? (e) => { e.preventDefault()} : setAnswered(index)} answered={answered === index} allAnswered={allAnswered} voter_count={item.votes} answer={item.answers} key={item.id} />
                    ))
                }
            </button>
            {
                is_dashboard &&
                <Link href={`/media/quiz/${ id }`} method="delete" className="w-full gap-2 text-xs  p-2 mt-3 rounded-lg bg-red-500 flex items-center justify-center text-white" data={{ id: id }}>Hapus</Link>
            }
        </div>
    );
}

const PollingOption = ({ id, idAnswer, answer, answered, voter_count, onClick, allAnswered, is_dashboard }) => {
    const [voter, setVoter] = useState(voter_count)

    const submit = (e, id) => {
        onClick();
        setVoter(voter + 1);
    }

    return (
        <Link onClick={is_dashboard ? (e) => { e.preventDefault(); } : submit} href="/media/quiz/option" method="post" preserveScroll data={{ user_id: 1, quiz_option_id: idAnswer }} className={`w-full gap-2 text-xs text-start p-2 mb-3 rounded-lg border border-primary flex items-center justify-between ${ answered && !is_dashboard ? 'bg-primary text-white' : 'text-gray-700' }`}>
            <div className="">{answer}</div>
            {
                allAnswered == id &&
                <div className="text-xs min-w-14 font-bold">{voter} pemilih</div>
            }
        </Link>
    )
}
