import ButtonNav from '@/Components/ButtonNav'
import { Carousel } from '@/Components/Carousel'
import ContentTile from '@/Components/ContentTile'
import { Footer } from '@/Components/Footer'
import { Navbar } from '@/Components/Navbar'
import { PollingCard } from '@/Components/PollingCard'
import StoryCard from '@/Components/StoryCard'
import React from 'react'
import GeneralLayout from '../../Layouts/GeneralLayout';

const Home = () => {
    return (
        <GeneralLayout>
            <div className="px-4 lg:px-20 pt-6 h-60 lg:h-svh">
                <Carousel></Carousel>
            </div>
            <div className="mx-4 lg:mx-20 my-10">
                {
                    [1, 2, 3, 4].map((item) => (
                        <ProgramSection></ProgramSection>
                    ))
                }
            </div>
            <div className="mx-4 lg:mx-20 my-10">
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
        <div className="my-8">
            <div className="flex justify-between w-full">
                <h1 className="text-xl font-semibold mb-2">Program A</h1>
                <ButtonNav></ButtonNav>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full">
                {
                    [1, 2, 3, 4].map((item) => (
                        <ContentTile />
                    ))
                }
            </div>
        </div>
    )
}

const StorySection = () => {
    return (
        <div className="">
            <div className="flex justify-between w-full">
                <h1 className="text-xl font-semibold mb-2">Stories</h1>
                <ButtonNav></ButtonNav>
            </div>
            <div className="flex overflow-x-scroll h-96">
                {
                    [1, 2, 3, 4, 5].map((item) => (
                        <div className="w-full mr-4 h-full">
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
        <div className="my-8">
            <div className="flex justify-between w-full">
                <h1 className="text-xl font-semibold mb-2">Polling</h1>
                <ButtonNav></ButtonNav>
            </div>
            <div className="flex overflow-x-scroll h-full">
                {
                    [1, 2, 3, 4].map((item) => (
                        <div className="w-full mr-4 h-full">
                            <PollingCard></PollingCard>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
