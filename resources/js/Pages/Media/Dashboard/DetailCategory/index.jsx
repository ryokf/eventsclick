import ContentTile from '@/Components/ContentTile';
import GeneralLayout from '@/Layouts/GeneralLayout'
import { router, useForm } from '@inertiajs/react';
import { Label, TextInput, Button, Breadcrumb } from 'flowbite-react'
import React from 'react'
import { HiHome } from "react-icons/hi";

const DetailCategory = ({ categories, programTitle }) => {
    const { data, setData, post, processing, errors } = useForm({
        title: categories.title,
    })

    const editCategory = (e) => {
        e.preventDefault();
        router.put(`/media/category/${ categories.id }`, data);
    }

    return (
        <GeneralLayout>
            <div className="w-11/12 mx-auto my-6 lg:w-1/2 lg:border rounded-lg lg:p-4">
                <Breadcrumb className="mb-4" aria-label="Default breadcrumb example">
                    <Breadcrumb.Item href="/media/dashboard" icon={HiHome}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">{programTitle.slice(0, 10) + "..."}</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">{categories.title}</Breadcrumb.Item>
                </Breadcrumb>
                <form className="flex max-w-md flex-col gap-1 gap-x-4 mb-6 lg:grid lg:grid-cols-3">
                    <div className=" block col-span-2 max-h-fit">
                        <Label htmlFor="title" value="Title" />
                    </div>
                    <div className="col-span-2">
                        <TextInput className="!m-0" id="title" type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} required />
                    </div>
                    <Button onClick={editCategory} type="submit" className="bg-[#fbbf24] !text-white">Edit</Button>
                </form>
                <div className="mb-8">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-2">Daftar Konten</h1>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        {
                            categories.contents.map((item, index) => (
                                <ContentTile href={`/media/dashboard/program/category/content?id=${ item.id }`} key={item.id} title={item.title} created_at={item.created_at} url_video={item.url_video}></ContentTile>
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
