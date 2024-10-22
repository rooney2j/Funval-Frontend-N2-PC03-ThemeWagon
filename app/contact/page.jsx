import Image from "next/image"

export default function Contact() {
    const nombre_carpeta_contact = '10.contact'

    return (
        <div className="h-lvh w-lvw bg-gradient-to-r from-blue-100 to-yellow-50 flex justify-center items-center">
            <div className="min-h-[90%] w-[95%] lg:w-full flex flex-col items-center">
                {/* Título */}
                <div className="col-span-2 flex flex-col items-center justify-start gap-4 mb-6 lg:mb-24">
                    <h2 className="text-xl lg:text-2xl capitalize">Contact us</h2>
                </div>

                <div className="w-full lg:flex lg:items-center lg:pl-60">
                    {/* Formulario */}
                    <div className="z-10 w-[320px] lg:w-[450px] h-[276px] border-2 border-white rounded-3xl mx-auto flex flex-col items-center lg:mr-[-200px]">
                        <form action="" className="w-[90%] pt-2">
                            <div className="relative w-full mt-2">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </div>

                                <input type="text" id="user-icon" className="bg-white text-gray-900 text-sm rounded-2xl block w-full ps-10 p-1.5" placeholder="Write your name" />
                            </div>

                            <div className="relative w-full mt-2">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gray" className="size-4">
                                        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                                        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                                    </svg>
                                </div>

                                <input type="text" id="email-address-icon" className="bg-white text-gray-900 text-sm rounded-2xl block w-full ps-10 p-1.5" placeholder="Write your name" />
                            </div>

                            <div className="relative w-full mt-2">
                                <div className="absolute inset-y-2 start-0 flex items center ps-3.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="size-4">
                                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                    </svg>
                                </div>

                                <textarea name="message" id="message" rows="5" className="bg-white text-gray-900 text-sm rounded-2xl block w-full ps-10 p-1.5 resize-none" placeholder="Write your message"></textarea>
                            </div>

                            <button type="button" className="mt-4 py-1 w-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl">
                                <span className="text-white text-sm">Submit</span>
                            </button>
                        </form>
                    </div>

                    {/* Information */}
                    <div className="w-full h-[260px] lg:h-[400px] mt-4 p-4 lg:pl-64 bg-[url('/images/10.contact/contact-bg.png')] rounded-full lg:rounded-none flex flex-col items-center lg:justify-center gap-4">

                        {/* Phone */}
                        <div className="w-2/3 h-14 grid grid-cols-[15%_85%]">
                            <div className="">
                                <div className="w-full h-8 flex items-center justify-center border-2 border-white rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="size-3">
                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                    </svg>

                                </div>
                            </div>

                            <div className="">
                                <h3 className="text-gray-900 text-sm block w-full pl-4 pt-2">Phone</h3>
                                <p className="text-slate-500 text-sm block w-full pl-3 pt-2">+880124332334</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="w-2/3 h-14 grid grid-cols-[15%_85%]">
                            <div className="">
                                <div className="w-full h-8 flex items-center justify-center border-2 border-white rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="blue" className="size-3">
                                        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                                        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                                    </svg>

                                </div>
                            </div>

                            <div className="">
                                <h3 className="text-gray-900 text-sm block w-full pl-4 pt-2">Email</h3>
                                <p className="text-slate-500 text-sm block w-full pl-4 pt-2">something@email.com</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="w-2/3 h-14 grid grid-cols-[15%_85%]">
                            <div className="">
                                <div className="w-full h-8 flex items-center justify-center border-2 border-white rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="size-3">
                                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div className="">
                                <h3 className="text-gray-900 text-sm block w-full pl-4 pt-2">Location</h3>
                                <p className="text-slate-500 text-sm block w-full lg:w-3/4 pl-4 pt-2">43/A Spooner Street, St laurence, Virginia, Texas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
