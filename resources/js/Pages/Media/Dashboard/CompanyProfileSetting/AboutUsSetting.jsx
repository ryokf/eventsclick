
"use client";

import { router } from "@inertiajs/react";
import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function AboutUsSetting() {
    const [openModal, setOpenModal] = useState(false);



    return (
        <>
            <Button onClick={() => setOpenModal(true)} className="w-full h-full flex justify-center items-center bg-primary">Atur Tentang Kami</Button>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Tentang kami</Modal.Header>
                <TextEditor></TextEditor>
            </Modal>
        </>
    );
}

function TextEditor() {
    const [value, setValue] = useState('');

    const submit = (e) => {
        e.preventDefault();
        router.post('/media/about-us', {
            _method: 'PUT',
            about_us: value
        })
        setOpenModal(false);
    }

    return (
        <>

            <Modal.Body>
                <div className="h-60 my-4">
                    <ReactQuill theme="snow" value={value} onChange={setValue} style={{ height: '100%' }} />;
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="bg-primary" onClick={submit}>Simpan</Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                    Batal
                </Button>
            </Modal.Footer>
        </>

    )

}

