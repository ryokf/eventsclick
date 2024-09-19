import { Carousel } from '@/Components/Carousel'
import ContentTile from '@/Components/ContentTile'
import { Navbar } from '@/Components/Navbar'
import React from 'react'

const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="px-4 lg:px-20 pt-6 h-60 lg:h-svh">
                <Carousel></Carousel>
            </div>
            <div className="mx-4 lg:mx-20 my-10">
                <ProgramSection></ProgramSection>
            </div>
        </div>
    )
}

const ProgramSection = () => {
    return (
        <div className="">
            <div className="flex justify-between w-full">
                <h1 className="text-2xl font-semibold mb-2">Program A</h1>
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

export default Home
