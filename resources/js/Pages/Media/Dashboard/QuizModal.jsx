
"use client";

import { router } from "@inertiajs/react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export function QuizModal() {
    const [openModal, setOpenModal] = useState(false);
    const [question, setQuestion] = useState('');
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');

    const submit = (e) => {
        e.preventDefault();
        router.post('/media/quiz', {
            question: question,
            answers: [answer1, answer2, answer3, answer4]
        })
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)} size="sm" className="bg-primary !text-white mb-2 flex items-center justify-center">Tambah Kuis</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Tambah Kuis</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Question" />
                            </div>
                            <TextInput
                                id="title"
                                type="text"
                                placeholder="Enter question"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Answer 1" />
                            </div>
                            <TextInput
                                id="title"
                                type="text"
                                placeholder="Enter question"
                                value={answer1}
                                onChange={(e) => setAnswer1(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Answer 2" />
                            </div>
                            <TextInput
                                id="title"
                                type="text"
                                placeholder="Enter question"
                                value={answer2}
                                onChange={(e) => setAnswer2(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Answer 3" />
                            </div>
                            <TextInput
                                id="title"
                                type="text"
                                placeholder="Enter question"
                                value={answer3}
                                onChange={(e) => setAnswer3(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Answer 4" />
                            </div>
                            <TextInput
                                id="title"
                                type="text"
                                placeholder="Enter question"
                                value={answer4}
                                onChange={(e) => setAnswer4(e.target.value)}
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
