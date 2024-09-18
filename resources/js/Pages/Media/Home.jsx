import { Carousel } from '@/Components/Carousel'
import { Navbar } from '@/Components/Navbar'
import React from 'react'

const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="px-20 pt-6 h-svh">
                {/* <Carousel></Carousel> */}
            </div>
            <ProgramSection></ProgramSection>
        </div>
    )
}

const ProgramSection = ()=> {
    return(
        <div className="">
            <h1 className="text-3xl font-medium">Program A</h1>
        </div>
    )
}

export default Home
