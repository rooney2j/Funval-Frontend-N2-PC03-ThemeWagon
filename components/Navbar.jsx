import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    const nombre_carpeta_navbar = '1.navbar'

    return (
        <nav className="py-3 px-6 flex justify-between text-sm bg-gradient-to-r from-white to-blue-50">
            <div className="flex items-center gap-5">
                <Image
                    src={`/images/${nombre_carpeta_navbar}/logo.png`}
                    width={100}
                    height={50}
                    alt="Logo"
                />

                <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex gap-5 md:gap-0 flex-col mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <li className="block md:flex md:items-center gap-1">
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
            </div>

            <div className="flex gap-4">
                <button className="py-1 px-4 rounded-md capitalize text-blue-600 hover:bg-white">Log in</button>
                <button className="py-1 px-4 rounded-md capitalize hover:bg-white">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">Sign up</span>
                </button>
            </div>
        </nav>
    )
}
