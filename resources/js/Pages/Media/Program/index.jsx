import ButtonNav from '@/Components/ButtonNav'
import { Carousel } from '@/Components/Carousel'
import ContentTile from '@/Components/ContentTile'
import GeneralLayout from '@/Layouts/GeneralLayout'
import { Button } from 'flowbite-react'
import React from 'react'

const Program = ({programDetail, categories, headers, latest}) => {
    const latestTest = Object.assign(latest)

    return (
        <GeneralLayout>
            <div className="lg:w-3/4 mx-auto overflow-x-hidden">
                <Header headers={headers} title={programDetail.title} description={programDetail.description} categories={categories}></Header>
                {/* <ContentSection title={"latest"} contents={latestTest}></ContentSection> */}
                {
                    categories.map((item) => (
                        item.contents.length > 0 &&
                        <ContentSection key={item.id} title={item.title} contents={item.contents}></ContentSection>
                    ))
                }
            </div>
        </GeneralLayout>
    )
}

const Header = ({headers, title, description, categories}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 w-full p-4">
            {/* <div className="w-full h-full bg-cover aspect-video rounded-lg overflow-hidden" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')" }}>
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
            </div> */}
            <div className="w-full h-full aspect-video">
            <Carousel headers={headers} titleSize={"!text-2xl"} subTitleSize={"!text-sm"} aspectRatio={"!aspect-video"}></Carousel>
            </div>
            <div className="">
                <h1 className="text-2xl font-semibold my-2 lg:text-5xl lg:font-bold">{title}</h1>
                <p className="text-sm lg:text-lg text-gray-400 leading-tight tracking-tight">{description}</p>
                <div className="flex gap-2 overflow-x-scroll h-fit mt-4">
                    {
                        categories.map((item) => (
                            <Button key={item.id} className="max-w-16 items-center border-primary border" color="" size="xs" outline>
                                <span className="text-primary">{item.title}</span>
                            </Button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const ContentSection = ({title, contents}) => {
    console.log(contents)
    return (
        <div className="my-8 mx-4">
            <div className="flex justify-between w-full">
                <h1 className="text-xl font-semibold mb-2">{title}</h1>
                <ButtonNav></ButtonNav>
            </div>
            <div className="flex gap-4 justify-start overflow-x-scroll h-full">
                {
                    contents.map((item) => (
                        <div key={item.id} className="w-fit h-full">
                            <ContentTile className='!w-44' key={item.id} id={item.id} title={item.title} category={item.category_id} created_at={item.created_at} url_video={item.url_video}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Program
