import GeneralLayout from '@/Layouts/GeneralLayout'
import React from 'react'
import { Breadcrumb, Button, Label, Select, Table, TextInput } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const DetailProgram = ({ programs }) => {
    console.log(programs)

    const visibilityData = [
        { id: 1, name: 'visible' },
        { id: 2, name: 'archive' },
        { id: 3, name: 'hide' },
    ]

    return (
        <GeneralLayout>
            <div className="my-6 w-11/12 mx-auto">
                <Breadcrumb className="mb-4" aria-label="Default breadcrumb example">
                    <Breadcrumb.Item href="/media/dashboard" icon={HiHome}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">{programs.title.slice(0, 20)+"..."}</Breadcrumb.Item>
                </Breadcrumb>
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="title" value="Title" />
                        </div>
                        <TextInput id="title" type="text" value={programs.title} required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="description" value="Description" />
                        </div>
                        <TextInput id="description" value={programs.description} type="text" required />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="visbilitas" />
                        </div>
                        <Select id="countries" value={programs.visibility} required>
                            {
                                visibilityData.map((item) => (
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                ))
                            }
                        </Select>
                    </div>
                    <Button type="submit" className="bg-[#fbbf24] !text-white">Edit</Button>
                </form>

                <div className="overflow-x-auto my-6">
                    <h1 className="text-xl font-semibold mb-4">Daftar Katgori</h1>
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
                                            <a href={`/media/dashboard/program/category?id=${ category.id }`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
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
