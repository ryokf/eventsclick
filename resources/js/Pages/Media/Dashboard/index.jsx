import GeneralLayout from '@/Layouts/GeneralLayout'
import React from 'react'
import CardDashboard from '../../../Components/CardDashboard';
import ContentTile from '@/Components/ContentTile';
import ButtonNav from '../../../Components/ButtonNav';
import imageToken from '@/helpers/imageToken';

const Dashboard = ({ programs, bgCover, headers }) => {
    return (
        <GeneralLayout>
            <div className="w-11/12 lg:w-1/2 mx-auto ">
                <div className="my-6">
                    <div className="w-full flex justify-between">
                        <h1 className="text-xl lg:text-3xl font-semibold mb-2">Daftar program</h1>
                        <ButtonNav href={`/media/dashboard/program`}></ButtonNav>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                        {
                            programs.map((item, index) => (
                                <CardDashboard key={item.id} id={item.id} title={item.title} image={imageToken(bgCover[index].url_video)}></CardDashboard>
                            ))
                        }
                    </div>
                </div>
                <div className="my-6">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-2">Daftar Header</h1>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        {
                            headers.map((item, index) => (
                                index < 8 &&
                                <ContentTile key={item.id} title={item.title} created_at={item.created_at} url_video={item.url_video}></ContentTile>
                            ))
                        }
                        {/* <ContentTile className='!w-44' title="Lorem ipsum dolor sit amet." category="Category" url_video="https://www.youtube.com/watch?v=5f4uLffQVHg"></ContentTile> */}
                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default Dashboard
