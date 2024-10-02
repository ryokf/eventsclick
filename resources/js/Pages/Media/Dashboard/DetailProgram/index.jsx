import GeneralLayout from '@/Layouts/GeneralLayout'
import React from 'react'
import { Breadcrumb, Button, Label, Select, Table, TextInput } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { router, useForm } from '@inertiajs/react';
import AddCategoryModal from './AddCategoryModal';

const DetailProgram = ({ programs }) => {
    // console.log(programs)

    const visibilityData = [
        { id: 1, name: 'visible' },
        { id: 2, name: 'archive' },
        { id: 3, name: 'hide' },
    ]

    const { data, setData, post, processing, errors } = useForm({
        title: programs.title,
        description: programs.description,
        visibility: programs.visibility,
    })

    console.log(data)

    const editProgram = (e) => {
        e.preventDefault();
        router.put(`/media/program/${ programs.id }`, data);
    }

    return (
        <GeneralLayout>
            <div className="my-6 w-11/12 mx-auto lg:w-1/2 lg:border rounded-lg lg:p-4">
                <Breadcrumb className="mb-4" aria-label="Default breadcrumb example">
                    <Breadcrumb.Item href="/media/dashboard" icon={HiHome}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">{programs.title.slice(0, 20) + "..."}</Breadcrumb.Item>
                </Breadcrumb>
                <form className="flex w-full flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="title" value="Title" />
                        </div>
                        <TextInput id="title" type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="description" value="Description" />
                        </div>
                        <TextInput id="description" value={data.description} onChange={(e) => setData('description', e.target.value)} type="text" required />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="visbilitas" />
                        </div>
                        <Select id="countries" value={data.visibility} onChange={(e) => setData('visibility', e.target.value)} required>
                            {
                                visibilityData.map((item) => (
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                ))
                            }
                        </Select>
                    </div>
                    <div className="w-full flex justify-end">
                        <Button type="submit" disabled={processing} onClick={editProgram} className="bg-[#fbbf24] w-1/5 !text-white">Edit</Button>
                    </div>
                </form>
                <hr className="my-4" />
                <div className="overflow-x-auto my-6">
                    <div className="flex justify-between items-center">

                        <h1 className="text-xl font-semibold mb-6">Daftar Katgori</h1>
                        <AddCategoryModal program_id={programs.id}></AddCategoryModal>
                    </div>
                    <Table striped>
                        <Table.Head>
                            <Table.HeadCell>No.</Table.HeadCell>
                            <Table.HeadCell>Category</Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                programs.categories.map((category, index) => (
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={category.id}>
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>{category.title}</Table.Cell>
                                        <Table.Cell>
                                            <a href={`/media/dashboard/program/category?id=${ category.id }`} className="font-medium bg-primary text-white px-3 py-1 rounded hover:underline dark:text-cyan-500">
                                                detail
                                            </a>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            }

                        </Table.Body>
                    </Table>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default DetailProgram
