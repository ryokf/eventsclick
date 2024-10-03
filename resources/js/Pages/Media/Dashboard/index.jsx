import GeneralLayout from '@/Layouts/GeneralLayout'
import React from 'react'
import CardDashboard from '../../../Components/CardDashboard';
import ContentTile from '@/Components/ContentTile';
import ButtonNav from '../../../Components/ButtonNav';
import imageToken from '@/helpers/imageToken';
import ProgramModal from './ProgramModal';
import { AboutUsSetting } from './CompanyProfileSetting/AboutUsSetting';
import { PolicySetting } from './CompanyProfileSetting/PolicySetting';
import { Table } from 'flowbite-react';
import { StoryModal } from './StoryModal';


const Dashboard = ({ programs, bgCover, headers, companyProfiles, stories }) => {
    const defaultVideo = `<iframe width="560" height="315" src="https://www.youtube.com/embed/jNQXAC9IVRw?si=u3WsfP0tFzkv7sVt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

    console.log(stories)

    return (
        <GeneralLayout>
            <div className="w-11/12 lg:w-1/2 mx-auto ">
                <div className="my-6 flex gap-4">
                    <AboutUsSetting content={companyProfiles.about_us}></AboutUsSetting>
                    <PolicySetting content={companyProfiles.policy}></PolicySetting>
                </div>
                <div className="my-6">
                    <div className="w-full flex justify-between">
                        <h1 className="text-xl lg:text-3xl font-semibold mb-2">Daftar program</h1>
                        {/* <ButtonNav href={`/media/dashboard/program`}></ButtonNav> */}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                        {
                            programs.length > 0 &&
                            programs.map((item, index) => (
                                <CardDashboard key={item.id} id={item.id} title={item.title} image={imageToken(bgCover[index] === null ? defaultVideo : bgCover[index].url_video)}></CardDashboard>
                            ))
                        }

                        <div className={``}>
                            <ProgramModal></ProgramModal>
                        </div>

                    </div>
                </div>
                <div className="">

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
                <div className="my-6">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-2">Daftar Stories</h1>
                    <StoryModal></StoryModal>
                    <div className="">
                        <Table striped>
                            <Table.Head>
                                <Table.HeadCell>#</Table.HeadCell>
                                <Table.HeadCell>Judul</Table.HeadCell>
                                <Table.HeadCell>Link</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {

                                    stories.map((item, index) => (
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {++index}
                                            </Table.Cell>
                                            <Table.Cell>{item.title}</Table.Cell>
                                            <Table.Cell><a className='text-primary' href={item.url_video} target="_blank">{item.url_video} </a></Table.Cell>
                                        </Table.Row>
                                    ))
                                }
                                {/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {'Apple MacBook Pro 17"'}
                                    </Table.Cell>
                                    <Table.Cell>Sliver</Table.Cell>
                                </Table.Row> */}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}



export default Dashboard
