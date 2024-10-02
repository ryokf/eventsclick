import { router } from "@inertiajs/react";
import { Button, Checkbox, Label, Modal, Select, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";

export default function ProgramModal() {
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [visibility, setVisibility] = useState('visible');
    const visibilityData = [
        { id: 1, name: 'visible' },
        { id: 2, name: 'archive' },
        { id: 3, name: 'hide' },
    ]

    const submit = (e) => {
        e.preventDefault();
        router.post('/media/program', {
            title: title,
            description: description,
            visibility: visibility
        })
        setOpenModal(false);
    }

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    return (
        <>
            <button onClick={() => setOpenModal(true)} className="cursor-pointer w-full h-full border-2 border-primary border-dashed rounded-lg flex flex-col items-center justify-center">
                <span className="text-4xl text-primary">+</span>
                <span className="text-primary">Tambah program</span>
            </button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Tambah program</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="Title" value="Title" />
                            </div>
                            <TextInput
                                id="Title"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
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
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                required
                            />
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="Visbilitas" value="Visbilitas" />
                            </div>
                            <Select id="Visbilitas" value={visibility} onChange={(event) => setVisibility(event.target.value)} required>
                                {visibilityData.map((data) => (
                                    <option key={data.id} value={data.id} >
                                        {data.name}
                                    </option>
                                ))}
                            </Select>
                        </div>
                        <div className="w-full">
                            <Button onClick={submit} className="w-full bg-primary">Simpan</Button>
                        </div>
                        {/* <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?&nbsp;
                            <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                                Create account
                            </a>
                        </div> */}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}