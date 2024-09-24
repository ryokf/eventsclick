import ButtonNav from '@/Components/ButtonNav'
import { Carousel } from '@/Components/Carousel'
import ContentTile from '@/Components/ContentTile'
import { PollingCard } from '@/Components/PollingCard'
import StoryCard from '@/Components/StoryCard'
import React from 'react'
import GeneralLayout from '../../Layouts/GeneralLayout';

const Home = ({ headers }) => {
    console.log(headers)

    return (
        <GeneralLayout>
            <div className="px-4 lg:w-10/12 mx-auto lg:px-10 pt-6 h-60 lg:h-fit">
                <Carousel headers={headers}></Carousel>
            </div>
            <div className="mx-4 lg:w-10/12 lg:px-10 lg:mx-auto my-10">
                {
                    [1, 2, 3, 4].map((item) => (
                        <ProgramSection key={item}></ProgramSection>
                    ))
                }
            </div>
            <div className="mx-4 m-auto lg:mx-20 my-10">
                <StorySection></StorySection>
            </div>
            <div className="mx-4 lg:mx-20 my-10">
                <PollingSection></PollingSection>
            </div>
        </GeneralLayout>
    )
}

const ProgramSection = () => {
    return (
        <div className="my-8 lg:my-20">
            <div className="flex justify-between w-full">
                <h1 className="text-xl lg:text-3xl lg:mb-6 font-semibold mb-2">Program A</h1>
                <ButtonNav></ButtonNav>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                {
                    [1, 2, 3, 4].map((item) => (
                        <ContentTile key={item}/>
                    ))
                }
            </div>
        </div>
    )
}

const StorySection = () => {
    return (
        <div className="my-8 lg:my-20 lg:w-11/12 lg:mx-auto lg:px-10">
            <div className="flex justify-between w-full">
                <h1 className="text-xl lg:text-3xl lg:mb-6 font-semibold mb-2">Stories</h1>
                <ButtonNav></ButtonNav>
            </div>
            <div className="flex gap-4 overflow-x-scroll h-fit">
                {
                    [1, 2, 3, 4, 5, 6, 7].map((item) => (
                        <div className="w-full h-full" key={item}>
                            <StoryCard />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const PollingSection = () => {
    return (
        <div className="my-8 lg:my-20 lg:w-11/12 lg:mx-auto lg:px-10">
            <div className="flex justify-between w-full">
                <h1 className="text-xl lg:text-3xl lg:mb-6 font-semibold mb-2">Polling</h1>
                <ButtonNav></ButtonNav>
            </div>
            <div className="flex gap-4 overflow-x-scroll h-fit">
                {
                    [1, 2, 3, 4].map((item) => (
                        <div className="w-full h-full" key={item}>
                            <PollingCard></PollingCard>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
