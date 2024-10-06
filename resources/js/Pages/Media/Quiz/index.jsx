import { PollingCard } from '@/Components/PollingCard'
import dateFormat from '@/helpers/dateFormat'
import GeneralLayout from '@/Layouts/GeneralLayout'
import React from 'react'

const Quiz = ({ quizzes }) => {
    console.log(quizzes)
    return (
        <GeneralLayout>
            <div className="my-8 mb-20 w-3/4 mx-auto">
                <h1 className="text-xl lg:text-3xl text-center my-10 font-semibold ">Daftar Polling</h1>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
                {
                    quizzes.map((item, index) => (
                        <div className="w-full h-full" key={item.id}>
                            <PollingCard id={item.quiz.id} question={item.quiz.question} options={quizzes[index].voteCounts} created_at={dateFormat(item.quiz.created_at)}></PollingCard>
                        </div>
                    ))
                }
                </div>
            </div>
        </GeneralLayout>
    )
}

export default Quiz
