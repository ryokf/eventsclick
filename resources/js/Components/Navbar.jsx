
"use client";

import { Button, Navbar as NavbarFB, Drawer as DrawerFB, Label, Textarea, TextInput, Dropdown } from "flowbite-react";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { Link, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { IoPerson } from "react-icons/io5";

export function Navbar() {
    const { program } = usePage().props


    const getProgram = program.map((item) => [item.id, item.title, item.visibility])

    const url = window.location.href
    const is_dashboard = url.split("/")[4] === 'dashboard'

    return (
        <NavbarFB fluid rounded className="bg-primary">
            <NavbarFB.Brand href="/" className="mx-2">
                <img src="/assets/logo.png" className="h-9 lg:h-16" alt="Eventsclick Logo" />
            </NavbarFB.Brand>
            <div className="flex md:order-2 ">
                {/* <Link className="invisible lg:visible !p-0 !m-0 flex items-center justify-center text-primary w-6 aspec bg-white"><IoPerson size={`100%`} /></Link> */}
                <Button className="invisible lg:visible items-center !px-0"><Drawer /></Button>
                <NavbarFB.Toggle className="text-white" />
            </div>
            <NavbarFB.Collapse className="text-white">
                {
                    getProgram.map((item, index) => (
                        item[2] === 'visible' &&
                        <NavbarFB.Link href="#" className="text-white hover:bg-white/50 border-none rounded-lg flex items-center h-full" key={item}>{item[1]} </NavbarFB.Link>
                    ))
                }
                {/* <NavbarFB.Link>     */}
                    <Dropdown className="border-none rounded-lg" label="Lainnya" >
                        {
                            program.map((item) => (
                                <Dropdown.Item href="#" key={item}>{item.title}</Dropdown.Item>
                            ))
                        }
                    </Dropdown>
                {/* </NavbarFB.Link> */}
            </NavbarFB.Collapse>
            {
                !is_dashboard &&
                <div className="lg:hidden fixed flex items-center justify-center aspect-square w-14 bg-primary rounded-full right-8 bottom-8">
                    <Drawer />
                </div>
            }
        </NavbarFB>
    );
}

export function Drawer() {
    const [isOpen, setIsOpen] = useState(false);
    const { auth } = usePage().props

    const handleClose = () => setIsOpen(false);

    return (
        <>
            <div className="flex items-center justify-center !p-0 !border-0">
                <Button className="!p-0 !m-0  flex items-center justify-center bg-white text-primary aspect-square rounded-full" onClick={() => setIsOpen(true)}>
                    <GiHamburgerMenu size={20} className="hidden" />
                    <FaSearch className="!p-0" size={20}></FaSearch>
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
                            <div className="my-4">

                            {
                                auth.user != null 
                                ? <Link href="/logout" method="post" className="cursor-pointer text-white bg-red-500 font-bold p-2 rounded">Logout</Link>
                                : <Link href="/login" className="cursor-pointer text-white font-bold bg-primary p-2 rounded">Login</Link>
                            }
                            </div>
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

