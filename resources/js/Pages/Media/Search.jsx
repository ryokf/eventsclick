import ContentTile from '@/Components/ContentTile'
import GeneralLayout from '@/Layouts/GeneralLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { TikTokEmbed } from 'react-social-media-embed'

const Search = ({ programs, stories, quizzes, contents }) => {
    console.log(stories)
    return (
        <GeneralLayout>
            <div className="px-4 lg:w-10/12 mx-auto lg:px-10 mt-10">
                <h1 className="text-3xl text-center font-bold">Hasil Pencarian : {window.location.search.split('=')[1]}</h1>
                <div className="">
                    <ContentSection contents={contents}></ContentSection>
                </div>
                <div className="mx-4 m-auto my-10">
                    <StorySection stories={stories}></StorySection>
                </div>

            </div>
        </GeneralLayout>
    )
}

const ContentSection = ({ contents }) => {
    return (
        <div className="my-8 mx-4">

            <h1 className="text-xl lg:text-3xl lg:mb-6 font-semibold mb-2">Konten</h1>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                {
                    contents.map((item) => (
                        <div key={item.id} className="w-full h-full">
                            <ContentTile href={`/media/program/content?id=${ item.id }`} id={item.id} title={item.title} category={item.category} created_at={item.created_at} image={item.image} url_video={item.url_video} key={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const StorySection = ({ stories }) => {
    return (
        <div className="my-8 lg:my-20 lg:mx-auto">
            <h1 className="text-xl lg:text-3xl lg:mb-6 font-semibold mb-2">Stories</h1>

            <div className="gap-x-2 gap-y-8 w-full grid grid-cols-1 lg:grid-cols-4">
                {
                    stories.map((item) => (
                        <div className="w-fit h-fit" key={item.id}>
                            <div style={{ display: 'flex ', justifyContent: 'center' }}>
                                <TikTokEmbed url={item.url_video} width={315} height={720} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const PollingSection = ({ quizzes }) => {
    return (
        <div className="my-8 lg:my-20 lg:w-11/12 lg:mx-auto lg:px-10">
            <div className="flex justify-between w-full">
                <h1 className="text-xl lg:text-3xl lg:mb-6 font-semibold mb-2">Polling</h1>
                <ButtonNav></ButtonNav>
            </div>
            <div className="flex gap-4 overflow-x-scroll h-fit">
                {
                    quizzes.map((item, index) => (
                        <div className="w-full h-full" key={item.id}>
                            <PollingCard question={item.quiz.question} options={quizzes[index].voteCounts}></PollingCard>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Search