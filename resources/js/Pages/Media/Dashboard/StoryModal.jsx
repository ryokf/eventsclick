
"use client";

import { router } from "@inertiajs/react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export function StoryModal() {
    const [openModal, setOpenModal] = useState(true);
    const [title, setTitle] = useState('');
    const [urlVideo, setUrlVideo] = useState('');

    const submit = (e) => {
        e.preventDefault();
        router.post('/media/story', {
            title: title,
            url_video: urlVideo
        })
        setOpenModal(false);
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)} size="xs" className="bg-primary !text-white mb-2 flex items-center justify-center">Tambah Story</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Tambah Story</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Title" />
                            </div>
                            <TextInput
                                id="title"
                                type="text"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="url_video" value="Url Video" />
                            </div>
                            <TextInput
                                id="url_video"
                                onChange={(e) => setUrlVideo(e.target.value)}
                                type="text"
                                value={urlVideo}
                                placeholder="Enter url video"
                                required
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" className="bg-primary" onClick={submit}>Simpan</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Batal
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
