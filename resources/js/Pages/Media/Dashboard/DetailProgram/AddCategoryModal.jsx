
"use client";

import { router } from "@inertiajs/react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function AddCategoryModal(program_id) {
    const [openModal, setOpenModal] = useState(false);
    const [category, setCategory] = useState('');


    function onCloseModal() {
        setOpenModal(false);
    }

    function submit(e) {
        e.preventDefault();
        router.post('/media/category', {
            title: category,
            program_id: program_id['program_id']
        })
        setOpenModal(false);
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)} size="xs" className="bg-primary !text-white aspect-square flex items-center justify-center"><FaPlus /></Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Tambah Kategori</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="category" value="Nama Kategori" />
                            </div>
                            <TextInput
                                id="category"
                                value={category}
                                onChange={(event) => setCategory(event.target.value)}
                                required
                            />
                        </div>
                        <div className="w-full flex justify-end">
                            <Button onClick={submit} type="submit" className="bg-primary !text-white">Submit</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
