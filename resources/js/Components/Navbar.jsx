
"use client";

import { Button, Navbar as NavbarFB, Drawer as DrawerFB, Label, Textarea, TextInput, Dropdown } from "flowbite-react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { Link, router, usePage } from "@inertiajs/react";

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
                        <NavbarFB.Link href={`/media/program?id=${ item[0] }`} className="text-white hover:bg-white/50 border-none rounded-lg flex items-center h-full" key={item}>{item[1]} </NavbarFB.Link>
                    ))
                }
                {/* <NavbarFB.Link>     */}
                <Dropdown className="border-none rounded-lg" label="Lainnya" >
                    {
                        program.map((item) => (
                            <Dropdown.Item href={`/media/program?id=${ item.id }`} key={item}>{item.title}</Dropdown.Item>
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
    const [search, setSearch] = useState('')
    const is_admin = auth.user != null && auth.user.is_admin == 1

    const handleClose = () => setIsOpen(false);

    const handleSearch = (e) => {
        e.preventDefault()

        router.get('/media/search', {
            search: search
        })
    }

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
                                <TextInput id="email" name="email" placeholder="tulis yang ingin anda cari..." type="text" value={search} onChange={(event) => setSearch(event.target.value)} onKeyDownCapture={(e) => e.key === 'Enter' ? handleSearch(e) : null} />
                            </div>
                        </form>
                    </DrawerFB.Items>
                    <DrawerFB.Items className="my-3">
                        {
                            auth.user != null
                                ?
                                <div className="">
                                    {
                                        is_admin &&
                                        <Link href="/dashboard" className="cursor-pointer w-full block text-white bg-primary font-bold p-2 rounded-lg mb-2">Dashboard</Link>
                                    }
                                    <Link href="/logout" method="post" className="cursor-pointer w-full block text-white bg-red-500 font-bold p-2 rounded-lg">Logout</Link>
                                </div>

                                :
                                <div className="flex items-center justify-center gap-4">
                                    <Link href="/register" method="get" className="cursor-pointer w-full block text-white bg-primary font-bold  p-2 rounded-lg">Register</Link>
                                    <Link href="/login" method="get" className="cursor-pointer w-full block text-white bg-primary font-bold  p-2 rounded-lg">Login</Link>
                                </div>
                        }
                    </DrawerFB.Items>
                </div>
            </DrawerFB>
        </>
    );
}

