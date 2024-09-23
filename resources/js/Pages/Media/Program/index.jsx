import ButtonNav from '@/Components/ButtonNav'
import ContentTile from '@/Components/ContentTile'
import GeneralLayout from '@/Layouts/GeneralLayout'
import { Button } from 'flowbite-react'
import React from 'react'

const Program = () => {
    return (
        <GeneralLayout>
            <div className="lg:w-3/4 mx-auto">
                <Header></Header>
                <ContentSection></ContentSection>
                <ContentSection></ContentSection>
                <ContentSection></ContentSection>
            </div>
        </GeneralLayout>
    )
}

const Header = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 w-full p-4">
            <div className="w-full h-full bg-cover aspect-video rounded-lg overflow-hidden" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')" }}>
                <div className="w-full h-full bg-gradient-to-b from-transparent via-black/50 to-black/70 flex flex-col justify-between">
                    <div className=""></div>
                    <div className="m-3 lg:m-6">
                        <p className="text-xs lg:text-base text-primary leading-none">Category</p>
                        <h1 className="font-semibold lg:text-4xl text-white mb-1">Lorem ipsum dolor sit amet.</h1>
                        <div className="flex w-full gap-3 text-gray-300 lg:text-base text-xs mt-1">
                            <p>252 suka</p> <p> 252 komentar </p> <p>5 hari lalu</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="text-2xl font-semibold my-2 lg:text-5xl lg:font-bold">Program A</h1>
                <p className="text-sm lg:text-lg text-gray-400 leading-tight tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur eveniet animi et quo doloribus atque commodi, reiciendis error ipsa iure, repellat iste quidem! Consequuntur commodi consectetur dicta itaque fugiat.</p>
                <div className="flex gap-2 overflow-x-scroll h-fit mt-4">
                    <Button className="w-full items-center border-primary border" color="" size="xs" outline>
                        <span className="text-primary">category</span>
                    </Button>
                    <Button className="w-full items-center border-primary border" color="" size="xs" outline>
                        <span className="text-primary">category</span>
                    </Button>
                    <Button className="w-full items-center border-primary border" color="" size="xs" outline>
                        <span className="text-primary">category</span>
                    </Button>
                    <Button className="w-full items-center border-primary border" color="" size="xs" outline>
                        <span className="text-primary">category</span>
                    </Button>
                    <Button className="w-full items-center border-primary border" color="" size="xs" outline>
                        <span className="text-primary">category</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

const ContentSection = () => {
    return (
        <div className="my-8 mx-4">
            <div className="flex justify-between w-full">
                <h1 className="text-xl font-semibold mb-2">Latest</h1>
                <ButtonNav></ButtonNav>
            </div>
            <div className="flex gap-4 justify-start overflow-x-scroll h-full">
                {
                    [1, 2, 3,4,5,6,7].map((item) => (
                        <div key={item} className="w-fit h-full">
                            <ContentTile className='!w-44' key={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Program
