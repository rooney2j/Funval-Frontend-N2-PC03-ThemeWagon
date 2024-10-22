'use client'

import Link from "next/link"
import Image from "next/image"

import { useState } from "react"

export default function Navbar() {
    const nombre_carpeta_navbar = '1.navbar';

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="py-3 px-6 flex justify-between text-sm bg-gradient-to-r from-white to-blue-50">
                <div className="flex items-center gap-5">
                    <Image
                        src={`/images/${nombre_carpeta_navbar}/logo.png`}
                        width={100}
                        height={50}
                        alt="Logo"
                    />

                    {/* Botón para el menú hamburguesa */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none md:hidden"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </button>

                    {/* Menú */}
                    <ul
                        className={`${isOpen && "hidden"} hidden md:flex space-x-4`}
                    >
                        <li className="flex items-center gap-1">
                            <Link href="/">Home</Link>
                            <div className="hidden lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </li>

                        <li className="flex items-center gap-1">
                            <Link href="/services">Services</Link>
                            <div className="hidden lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </li>

                        <li className="flex items-center gap-1">
                            <Link href="/details">Details</Link>
                            <div className="hidden lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </li>

                        <li className="flex items-center gap-1">
                            <Link href="/features">Features</Link>
                            <div className="hidden lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </li>

                        <li className="flex items-center gap-1">
                            <Link href="/projects">Projects</Link>
                            <div className="hidden lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </li>

                        <li className="flex items-center gap-1">
                            <Link href="/team">Team</Link>
                            <div className="hidden lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </li>

                        <li className="flex items-center gap-1">
                            <Link href="/testimonial">Testimonial</Link>
                            <div className="hidden lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </li>

                        <li className="flex items-center gap-1">
                            <Link href="/blog">Blog</Link>
                            <div className="hidden lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </li>

                        <li className="flex items-center gap-1">
                            <Link href="/contact">Contact</Link>
                            <div className="hidden lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>



                <div className="flex gap-4">
                    <button className="py-1 px-4 rounded-md capitalize text-blue-600 hover:bg-white">Log in</button>
                    <button className="py-1 px-4 rounded-md capitalize hover:bg-white">
                        <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">Sign up</span>
                    </button>
                </div>
            </nav>

            {/* Menú para pantallas pequeñas */}
            {isOpen && (
                <ul className="pl-12 mt-4 space-y-2 md:hidden">
                    <li className="flex items-center gap-1 hover:text-blue-600">
                        <Link href="/">Home</Link>
                    </li>

                    <li className="flex items-center gap-1 hover:text-blue-600">
                        <Link href="/services">Services</Link>
                    </li>

                    <li className="flex items-center gap-1 hover:text-blue-600">
                        <Link href="/details">Details</Link>
                    </li>

                    <li className="flex items-center gap-1 hover:text-blue-600">
                        <Link href="/features">Features</Link>
                    </li>

                    <li className="flex items-center gap-1 hover:text-blue-600">
                        <Link href="/projects">Projects</Link>
                    </li>

                    <li className="flex items-center gap-1 hover:text-blue-600">
                        <Link href="/team">Team</Link>
                    </li>

                    <li className="flex items-center gap-1 hover:text-blue-600">
                        <Link href="/testimonial">Testimonial</Link>
                    </li>

                    <li className="flex items-center gap-1 hover:text-blue-600">
                        <Link href="/blog">Blog</Link>
                    </li>

                    <li className="flex items-center gap-1 hover:text-blue-600">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            )}
        </>
    )
}
