import GeneralLayout from '@/Layouts/GeneralLayout'
import React, { useState, useEffect } from 'react'
import { Breadcrumb, Button, Label, Textarea, TextInput } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import imageToken from '@/helpers/imageToken';
import Checkbox from '@/Components/Checkbox';
import { Link, router, useForm } from '@inertiajs/react';


const DetailContent = ({ contents, programTitle, categoryTitle }) => {
    const [coverPreview, setCoverPreview] = useState(imageToken(contents.url_video));

    const { data, setData, post, processing, errors } = useForm({
        title: contents.title,
        content: contents.content,
        is_header_home: contents.is_header_home,
        is_header_program: contents.is_header_program,
        tags: contents.tags,
        url_video: contents.url_video,
        category_id: contents.category_id,
    })

    useEffect(() => {
        setCoverPreview(imageToken(data.url_video));
    }, [data.url_video]);

    console.log(data)

    const submit = (e) => {
        e.preventDefault();
        router.put('/media/content/' + contents.id, data)
    }

    return (
        <GeneralLayout>
            <div className="my-6 lg:py-6 lg:w-1/2 mx-auto lg:border rounded-lg flex flex-col items-center">
                <Breadcrumb className="mb-4" aria-label="Default breadcrumb example">
                    <Breadcrumb.Item href="/media/dashboard" icon={HiHome}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href={`/media/dashboard/program/category?id=${contents.category_id}`}>{programTitle.slice(0, 6) + "..."}</Breadcrumb.Item>
                    <Breadcrumb.Item href={`/media/dashboard/program/category?id=${contents.category_id}`}>{categoryTitle.title.slice(0, 6) + "..."}</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">{contents.title.slice(0, 10) + "..."}</Breadcrumb.Item>
                </Breadcrumb>
                <form className="flex w-10/12 flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="title" value="Title" />
                        </div>
                        <TextInput id="title" type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="content" value="Content" />
                        </div>
                        <Textarea id="content" value={data.content} onChange={(e) => setData('content', e.target.value)} type="text" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="tags" value="Tags" />
                        </div>
                        <Textarea id="tags" value={data.tags} onChange={(e) => setData('tags', e.target.value)} type="text" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="url_video" value="URL Video" />
                        </div>
                        <img
                            src={`https://i.ytimg.com/vi/${ coverPreview }/maxresdefault.jpg`}
                            className="w-1/2 aspect-video rounded-lg mb-2"
                            alt=""
                        />
                        <TextInput id="url_video" type="text" value={data.url_video} onChange={(e) => setData('url_video', e.target.value)} required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="is_header_home" checked={data.is_header_home} onChange={(e) => setData('is_header_home', e.target.checked)}/>
                        <Label htmlFor="is_header_home">Gunakan untuk header home</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="is_header_program" checked={data.is_header_program} onChange={(e) => setData('is_header_program', e.target.checked)}/>
                        <Label htmlFor="is_header_program">Gunakan untuk header program</Label>
                    </div>
                    <Button onClick={submit} type="submit" className="bg-[#fbbf24] !text-white">Edit</Button>
                    <Link href={`/media/content/${contents.id}`} method='delete' className="bg-red-500 !text-white flex items-center justify-center w-full rounded-md p-2">Hapus</Link>
                </form>
            </div>
        </GeneralLayout>
    )
}

export default DetailContent
