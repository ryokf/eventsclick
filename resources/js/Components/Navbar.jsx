
"use client";

import { Button, Navbar as NavbarFB, Drawer as DrawerFB, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";


export function Navbar() {
    return (
        <NavbarFB fluid rounded className="bg-primary">
            <NavbarFB.Brand href="https://flowbite-react.com" className="mx-2">
                <img src="/assets/logo.png" className="h-9" alt="Eventsclick Logo" />
            </NavbarFB.Brand>
            <div className="flex md:order-2">
                <Button className="invisible lg:visible"><Drawer /></Button>
                <NavbarFB.Toggle className="text-white" />
            </div>
            <NavbarFB.Collapse className="">
                {
                    [1, 2, 3, 4, 5].map((item) => (
                        <NavbarFB.Link href="#" className="text-white hover:bg-white/50 border-none rounded-lg" key={item}>Program {item}</NavbarFB.Link>
                    ))
                }
            </NavbarFB.Collapse>
            <div className="lg:hidden fixed flex items-center justify-center aspect-square w-14 bg-primary rounded-full right-8 bottom-8">
                <Drawer />
            </div>
        </NavbarFB>
    );
}

export function Drawer() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    return (
        <>
            <div className="flex items-center justify-center !p-0 !border-0">
                <Button className="!p-0 !m-0  flex items-center justify-center" onClick={() => setIsOpen(true)}>
                    <GiHamburgerMenu size={20} className="hidden" />
                    <FaSearch size={20}></FaSearch>
                </Button>
            </div>
            <DrawerFB position="right" open={isOpen} onClose={handleClose} className="z-[999999999] rounded-l-xl backdrop-blur-lg bg-white/80">
                <DrawerFB.Header className="2xl:justify-between" title="Cari" titleIcon={FaSearch} />
                <div className="flex flex-col justify-between h-modal">
                    <DrawerFB.Items>
                        <form action="#">
                            <div className="mb-6 mt-3">
                                <TextInput id="email" name="email" placeholder="tulis yang ingin anda cari..." type="text" />
                            </div>
                        </form>
                    </DrawerFB.Items>
                    <DrawerFB.Items>
                        <hr className="border-gray-700 my-2" />
                        <ul className="font-light font-sans text-right text-sm text-gray-700">
                            <a href="/media">
                                <li>Tentang kami</li>
                            </a>
                            <a href="/media">
                                <li>Media Partner</li>
                            </a>
                            <a href="/media">
                                <li>Layanan ketentuan web</li>
                            </a>
                        </ul>
                    </DrawerFB.Items>
                </div>
            </DrawerFB>
        </>
    );
}
