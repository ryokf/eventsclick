import React, { useState } from 'react';
import { Button, Modal } from "flowbite-react";
import { FaPlay } from "react-icons/fa";
import parse from 'html-react-parser';

const ContentTile = ({ className = "",id,  title, category, created_at, image, url_video }) => {

    let image_id = url_video.split(" ")[3];
    image_id = image_id.split("/")[4];
    image_id = image_id.split("?")[0];

    return (
        <div className="">
            <div style={{ backgroundImage: `url(https://i.ytimg.com/vi/${image_id}/maxresdefault.jpg)`}} className={`bg-cover w-full aspect-video rounded-lg overflow-hidden ${className}`}>
                <VideoModal url_video={url_video}/>
            </div>
            <a href="/media/program/content" className="mt-1 block">
                <p className="text-xs text-primary">Category</p>
                <h1 className="text-sm">{title}</h1>
                <p className="text-xs text-gray-400">{created_at}</p>
            </a>
        </div>
    )
}

export function VideoModal({url_video}) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button className="w-full h-full flex justify-center items-center" onClick={() => setOpenModal(true)}>
            <FaPlay />
            </Button>
            <Modal className="" dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="header"></Modal.Header>
                <button onClick={() => setOpenModal(false)} className="flex justify-center items-center w-full h-screen">
                    {
                        parse(url_video)
                    }
                </button>
            </Modal>
        </>
    );
}


export default ContentTile
