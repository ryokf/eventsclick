import React from 'react'
import { useState } from 'react';
import { Button, Modal } from "flowbite-react";
import { FaPlay } from "react-icons/fa";

const ContentTile = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="">
            {/* <iframe className="w-full h-full" src="https://www.youtube.com/embed/kmu7fEW-Pio?si=Iy9ArOsN3v9Ckn-_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe> */}
            <div style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')" }} className="bg-cover w-full aspect-video rounded-lg overflow-hidden">
                <VideoModal/>
            </div>
            <div className="mt-1">
                <p className="text-xs text-primary">Category</p>
                <h1 className="text-sm">Lorem ipsum dolor sit</h1>
                <p className="text-xs text-gray-400">15 September 2022</p>
            </div>
        </div>
    )
}

export function VideoModal() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button className="w-full h-full flex justify-center items-center" onClick={() => setOpenModal(true)}>
            <FaPlay />
            </Button>
            <Modal className="" dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="header"></Modal.Header>
                <button onClick={() => setOpenModal(false)} className="flex justify-center items-center w-full h-screen">
                    <iframe onClick={() => setOpenModal(true)} className="w-full h-full aspect-video overflow-hidden rounded-lg" src="https://www.youtube.com/embed/kmu7fEW-Pio?si=Iy9ArOsN3v9Ckn-_/autoplay=1" title="YouTube video player" frameborder="0" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </button>
            </Modal>
        </>
    );
}


export default ContentTile
