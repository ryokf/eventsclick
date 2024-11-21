import ButtonNav from '@/Components/ButtonNav'
import { Carousel } from '@/Components/Carousel'
import ContentTile from '@/Components/ContentTile'
import { PollingCard } from '@/Components/PollingCard'
import StoryCard from '@/Components/StoryCard'
import React, {useState, useEffect} from 'react'
import GeneralLayout from '../../Layouts/GeneralLayout';
import { InstagramEmbed, TikTokEmbed } from 'react-social-media-embed';
import dateFormat from '@/helpers/dateFormat'

const Home = ({ headers, programs, stories, quizzes, quizzesWithVoteCounts }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        return <div className="h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
        </div>
    }

    return (
        <GeneralLayout>
            <div className="px-4 lg:w-10/12 mx-auto lg:px-10 pt-6 h-60 lg:h-fit">
                <Carousel headers={headers}></Carousel>
            </div>
            <div div className="mx-4 lg:w-10/12 lg:px-10 lg:mx-auto my-10" >
                {
                    programs.map((item) => (
                        <ProgramSection key={item} id={item.id} title={item.title} contents={item.contents} ></ProgramSection>
                    ))
                }
            </div >
            <div className="mx-4 m-auto lg:mx-20 my-10">
                <StorySection stories={stories}></StorySection>
            </div>
            <div className="mx-4 lg:mx-20 my-10">
                <PollingSection quizzes={quizzesWithVoteCounts}></PollingSection>
            </div>
        </GeneralLayout >
    )
}

const ProgramSection = ({ id, title, contents }) => {
    return (
        <div className={`my-8 lg:my-20`}>
            <div className="flex justify-between w-full">
                <h1 className="text-xl lg:text-3xl lg:mb-6 font-semibold mb-2">{title}</h1>
                <ButtonNav href={`/media/program?id=${ id }`}></ButtonNav>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                {
                    contents.filter((item, idx) => idx < 4).map((item, index) => (
                        <ContentTile href={`/media/program/content?slug=${ item.slug }`} id={item.id} title={item.title} category={item.category} created_at={item.created_at} image={item.image} url_video={item.url_video} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

const StorySection = ({ stories }) => {
    return (
        <div className="my-8 lg:my-20 lg:w-11/12 lg:mx-auto lg:px-10">
            <div className="flex justify-between w-full">
                <h1 className="text-xl lg:text-3xl lg:mb-6 font-semibold mb-2">Stories</h1>
                <ButtonNav href={`/media/stories`}></ButtonNav>
            </div>
            <div className="flex gap-4 overflow-x-scroll h-fit no-scrollbar">
                {
                    stories.map((item) => (
                        <div className="w-fit h-full" key={item.id}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>

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
                <ButtonNav href={`/media/quiz`}></ButtonNav>
            </div>
            <div className="flex gap-4 overflow-x-scroll h-fit no-scrollbar">
                {
                    quizzes.map((item, index) => (
                        <div className="w-full h-full" key={item.id}>
                            <PollingCard id={item.quiz.id} question={item.quiz.question} options={quizzes[index].voteCounts} created_at={dateFormat(item.quiz.created_at)}></PollingCard>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home

