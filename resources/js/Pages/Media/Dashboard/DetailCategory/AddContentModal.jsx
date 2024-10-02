import { router, useForm } from "@inertiajs/react";
import { Button, Checkbox, Label, Modal, Select, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";

export default function AddContentModal(category_id) {
    const [openModal, setOpenModal] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
        is_header_home: false,
        is_header_program: false,
        tags: '',
        url_video: '',
        category_id: category_id.category_id,
    })

    const submit = (e) => {
        e.preventDefault();
        router.post('/media/content', data)
        setOpenModal(false);
    }

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    return (
        <>
            <button onClick={() => setOpenModal(true)} className="cursor-pointer w-full border-2 border-primary border-dashed rounded-lg aspect-video flex flex-col items-center justify-center">
                <span className="text-4xl text-primary">+</span>
                <span className="text-primary">Tambah konten</span>
            </button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Tambah konten</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="Title" value="Title" />
                            </div>
                            <TextInput
                                id="Title"
                                value={data.title}
                                onChange={(event) => setData('title', event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="url_video" value="Url Video" />
                            </div>
                            <TextInput
                                id="url_video"
                                value={data.url_video}
                                onChange={(event) => setData('url_video', event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="description" value="Description" />
                            </div>
                            <Textarea
                                className="h-32"
                                id="description"
                                value={data.content}
                                onChange={(event) => setData('content', event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="tags" value="Tags" />
                            </div>
                            <Textarea
                                className="h-32"
                                id="tags"
                                value={data.tags}
                                onChange={(event) => setData('tags', event.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="is_header_home" checked={data.is_header_home} onChange={(event) => setData('is_header_home', event.target.checked)}/>
                            <Label htmlFor="is_header_home">Gunakan untuk header home</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="is_header_program" checked={data.is_header_program} onChange={(event) => setData('is_header_program', event.target.checked)}/>
                            <Label htmlFor="is_header_program">Gunakan untuk header program</Label>
                        </div>
                        <div className="w-full">
                            <Button onClick={submit} className="w-full bg-primary">Simpan</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}