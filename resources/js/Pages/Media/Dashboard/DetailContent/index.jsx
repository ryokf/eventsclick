import GeneralLayout from '@/Layouts/GeneralLayout'
import React, { useState } from 'react'
import { Breadcrumb, Button, Label, Select, Textarea, TextInput } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import imageToken from '@/helpers/imageToken';
import Checkbox from '@/Components/Checkbox';


const DetailContent = ({ contents, programTitle, categoryTitle }) => {
    const [coverPreview, setCoverPreview] = useState(imageToken(contents.url_video));

    return (
        <GeneralLayout>
            <div className="my-6 w-11/12 mx-auto">
                <Breadcrumb className="mb-4" aria-label="Default breadcrumb example">
                    <Breadcrumb.Item href="/media/dashboard" icon={HiHome}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">{programTitle.slice(0, 6) + "..."}</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">{categoryTitle.title.slice(0, 6) + "..."}</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">{contents.title.slice(0, 10) + "..."}</Breadcrumb.Item>
                </Breadcrumb>
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="title" value="Title" />
                        </div>
                        <TextInput id="title" type="text" value={contents.title} required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="content" value="Content" />
                        </div>
                        <Textarea id="content" value={contents.content} type="text" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="tags" value="Tags" />
                        </div>
                        <Textarea id="tags" value={contents.tags} type="text" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="url_video" value="URL Video" />
                        </div>
                        <img 
                            src={`https://i.ytimg.com/vi/${coverPreview}/maxresdefault.jpg`} 
                            className="w-1/2 aspect-video rounded-lg mb-2" 
                            alt="" 
                        />
                        <TextInput id="url_video" type="text" value={contents.url_video} required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="is_header_home" />
                        <Label htmlFor="is_header_home">Gunakan untuk header home</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="is_header_program" />
                        <Label htmlFor="is_header_program">Gunakan untuk header program</Label>
                    </div>
                    <Button type="submit" className="bg-[#fbbf24] !text-white">Edit</Button>
                </form>
            </div>
        </GeneralLayout>
    )
}

export default DetailContent
