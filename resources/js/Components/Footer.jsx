
"use client";

import { Flowbite, Footer as FooterFB } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

export function Footer() {
    return (
        <Flowbite theme={{ theme: customTheme }}>
            <FooterFB container className="bg-primary">
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <FooterFB.Brand
                                href={"/"}
                                src="/assets/logo.png"
                                alt="Eventsclick Logo"
                                name=""
                                className=""
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <FooterFB.Title className="!text-white" title="about" />
                                <FooterFB.LinkGroup col className="!text-white">
                                    <FooterFB.Link href="/media/about-us">Tentang kami</FooterFB.Link>
                                </FooterFB.LinkGroup>
                            </div>
                            <div >
                                <FooterFB.Title className="!text-white" title="Follow us" />
                                <FooterFB.LinkGroup col className="!text-white">
                                    <FooterFB.Link href="https://instagram.com/eventsclick">Instagram</FooterFB.Link>
                                    <FooterFB.Link href="https://youtube.com/eventsclick">Youtube</FooterFB.Link>
                                </FooterFB.LinkGroup>
                            </div>
                            <div>
                                <FooterFB.Title title="Legal" className="!text-white" />
                                <FooterFB.LinkGroup col className="!text-white">
                                    <FooterFB.Link href="#">Privacy Policy</FooterFB.Link>
                                    <FooterFB.Link href="#">Terms &amp; Conditions</FooterFB.Link>
                                </FooterFB.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <FooterFB.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <FooterFB.Copyright href="#" by="Eventsclick" year={2024} className="!text-white" />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <FooterFB.Icon href="https://instagram.com/eventsclick" icon={BsInstagram} className="!text-white" />
                            <FooterFB.Icon href="https://youtube.com/eventsclick" icon={BsYoutube} className="!text-white" />

                        </div>
                    </div>
                </div>
            </FooterFB>
        </Flowbite>
    );
}

const customTheme = {theme: {
    "root": {
        "base": "bg-primary w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
        "container": "w-full p-6",
        "bgDark": "bg-gray-800"
    },
    "groupLink": {
        "base": "flex flex-wrap text-sm text-gray-500 dark:text-white",
        "link": {
            "base": "me-4 last:mr-0 md:mr-6",
            "href": "hover:underline"
        },
        "col": "flex-col space-y-4"
    },
    "icon": {
        "base": "text-gray-500 dark:hover:text-white",
        "size": "h-5 w-5"
    },
    "title": {
        "base": "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
    },
    "divider": {
        "base": "my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"
    },
    "copyright": {
        "base": "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
        "href": "ml-1 hover:underline",
        "span": "ml-1"
    },
    "brand": {
        "base": "mb-4 flex items-center sm:mb-0",
        "img": "mr-3 !h-96",
        "span": "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
    }
}}