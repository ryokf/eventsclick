import React, { useState } from 'react';
import { Button, Flowbite, Modal } from "flowbite-react";
import { FaPlay } from "react-icons/fa";
import parse from 'html-react-parser';
import dateFormat from '@/helpers/dateFormat';

const ContentTile = ({ className = "", href, title, category = "", created_at, url_video, id }) => {

    let image_id = url_video.split(" ")[3];
    image_id = image_id.split("/")[4];
    image_id = image_id.split("?")[0];

    return (
        <div className="">
            <div style={{ backgroundImage: `url(https://i.ytimg.com/vi/${ image_id }/maxresdefault.jpg)` }} className={`bg-cover w-full aspect-video rounded-lg overflow-hidden ${ className }`}>
                <VideoModal url_video={url_video} />
            </div>
            <a href={href} className="mt-1 block">
                {/* <p className="text-xs text-primary">Category</p> */}
                <h1 className="text-sm text-ellipsis max-w-36">{title}</h1>
                <p className="text-xs text-gray-400">{dateFormat(created_at)}</p>
            </a>
        </div>
    )
}

export function VideoModal({ url_video }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button className="w-full h-full flex justify-center items-center" onClick={() => setOpenModal(true)}>
                <FaPlay />
            </Button>
            <Flowbite theme={{ theme: theme }}>

                <Modal className="!rounded-xl" size={'7xl'} dismissible show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header className="header bg-transparent"></Modal.Header>
                    <button onClick={() => setOpenModal(false)} className="flex bg-transparent justify-center items-center w-full h-screen">
                        {
                            parse(url_video)
                        }
                    </button>
                </Modal>
            </Flowbite>
        </>
    );
}

const theme = {modal: {
    "root": {
        "base": "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
        "show": {
            "on": "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
            "off": "hidden"
        },
        "sizes": {
            "sm": "max-w-sm",
            "md": "max-w-md",
            "lg": "max-w-lg",
            "xl": "max-w-xl",
            "2xl": "max-w-2xl",
            "3xl": "max-w-3xl",
            "4xl": "max-w-4xl",
            "5xl": "max-w-5xl",
            "6xl": "max-w-6xl",
            "7xl": "max-w-xl"
        },
        "positions": {
            "top-left": "items-start justify-start",
            "top-center": "items-start justify-center",
            "top-right": "items-start justify-end",
            "center-left": "items-center justify-start",
            "center": "items-center justify-center",
            "center-right": "items-center justify-end",
            "bottom-right": "items-end justify-end",
            "bottom-center": "items-end justify-center",
            "bottom-left": "items-end justify-start"
        }
    },
    "content": {
        "base": "relative h-full w-full p-4 md:h-auto",
        "inner": "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700"
    },
    "body": {
        "base": "flex-1 overflow-auto p-6",
        "popup": "pt-0"
    },
    "header": {
        "base": "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
        "popup": "border-b-0 p-2",
        "title": "text-xl font-medium text-gray-900 dark:text-white",
        "close": {
            "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
            "icon": "h-5 w-5"
        }
    },
    "footer": {
        "base": "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
        "popup": "border-t"
    }
}}


export default ContentTile
