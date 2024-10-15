
"use client";

import dateFormat from "@/helpers/dateFormat";
import imageToken from "@/helpers/imageToken";
import { Link  } from "@inertiajs/react";
import { Modal } from "flowbite-react";
import { useState } from "react";

export function HeaderModal({ contents }) {
    const [openModals, setOpenModals] = useState(false);

    return (
        <>
            <button onClick={() => setOpenModals(true)} className="cursor-pointer w-full h-full border-2 border-primary border-dashed rounded-lg flex flex-col items-center justify-center row-span-3">
                <span className="text-4xl text-primary">+</span>
                <span className="text-primary">Tambah header</span>
            </button>
            <Modal show={openModals} onClose={() => setOpenModals(false)}>
                <Modal.Header>Tambah header</Modal.Header>
                <Modal.Body>
                    <div className="grid grid-cols-3 gap-4">
                        {
                            contents.map((content, index) => {
                                return (
                                    <Link as="button" href={`/media/content/set-header`} method="put" data={{ id: content.id }} className="h-full w-full" key={content.id}>
                                        <div style={{ backgroundImage: `url(https://i.ytimg.com/vi/${ imageToken(content.url_video) }/maxresdefault.jpg)` }} className={`bg-cover w-full aspect-video rounded-lg overflow-hidden`}>
                                        </div>
                                        <div className="mt-1">
                                            {/* <p className="text-xs text-primary">Category</p> */}
                                            <h1 className="text-sm text-start text-ellipsis max-w-36">{content.title}</h1>
                                            <p className="text-xs text-start text-gray-400">{dateFormat(content.created_at)}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}
