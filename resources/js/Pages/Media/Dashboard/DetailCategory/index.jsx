import ContentTile from '@/Components/ContentTile';
import GeneralLayout from '@/Layouts/GeneralLayout'
import { Label, TextInput, Button, Breadcrumb } from 'flowbite-react'
import React from 'react'
import { HiHome } from "react-icons/hi";

const DetailCategory = ({ categories, programTitle }) => {
    return (
        <GeneralLayout>
            <div className="w-11/12 mx-auto my-6">
                <Breadcrumb className="mb-4" aria-label="Default breadcrumb example">
                    <Breadcrumb.Item href="/media/dashboard" icon={HiHome}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">{programTitle.slice(0, 10) + "..."}</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">{categories.title}</Breadcrumb.Item>
                </Breadcrumb>
                <form className="flex max-w-md flex-col gap-4 mb-6">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="title" value="Title" />
                        </div>
                        <TextInput id="title" type="text" value={categories.title} required />
                    </div>
                    <Button type="submit" className="bg-[#fbbf24] !text-white">Edit</Button>
                </form>
                <div className="mb-8">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-2">Daftar Konten</h1>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        {
                            categories.contents.map((item, index) => (
                                <ContentTile href={`/media/dashboard/program/category/content?id=${item.id}`} key={item.id} title={item.title} created_at={item.created_at} url_video={item.url_video}></ContentTile>
                            ))
                        }
                        {/* <ContentTile className='!w-44' title="Lorem ipsum dolor sit amet." category="Category" url_video="https://www.youtube.com/watch?v=5f4uLffQVHg"></ContentTile> */}
                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default DetailCategory
