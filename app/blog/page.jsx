import Image from "next/image"

export default function Blog() {
    const nombre_carpeta_blog = '9.blog'

    return (
        <div className="h-lvh w-lvw bg-gradient-to-r from-blue-100 to-yellow-50 flex justify-center items-center">
            <div className="min-h-[90%] w-[95%] lg:w-[80%] flex flex-col items-center">
                {/* Título */}
                <div className="col-span-2 flex flex-col items-center justify-start gap-4 mb-6 lg:mb-24">
                    <h2 className="text-xl lg:text-2xl">Blog post</h2>
                    <p className="text-xs text-slate-500 text-center lg:w-2/3">
                        Blogs are a great method to increase trafic and generate leads. Make a profit. Get compensated for your efforts.
                    </p>
                </div>

                {/* ------- Blog Cards -------- */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2">
                    {/* Card 1 */}
                    <div className="w-[282px] h-[200px] border-2 border-white rounded-3xl cursor-pointer mx-auto">
                        <div className="px-4 h-full flex flex-col justify-between">
                            <div>
                                {/* Card Head */}
                                <div>
                                    <h4 className="text-xs py-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Article</h4>
                                    <hr />
                                </div>

                                {/* Card body */}
                                <div className="pt-2">
                                    <h3>
                                        How do you use social media for growing traffic and sales?
                                    </h3>

                                    <div className="pt-2 flex items-center">
                                        <Image
                                            src={`/images/${nombre_carpeta_blog}/author-1.png`}
                                            width={500}
                                            height={500}
                                            alt="Logo"
                                            className="w-6"
                                        />

                                        <div className="pl-2 flex flex-col">
                                            <h5 className="text-xs">Jessica Parker</h5>
                                            <span className="text-[10px]">May, 2020 - 5 mins read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card footer */}
                            <div className="flex gap-4 pb-4">
                                {/* Likes */}
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                    </svg>

                                    <span className="ml-1 text-xs">34</span>
                                </div>

                                {/* Views */}
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>


                                    <span className="ml-1 text-xs">203</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Fin de Card 1 */}

                    {/* Card 2 */}
                    <div className="w-[282px] h-[200px] border-2 border-white rounded-3xl cursor-pointer mx-auto">
                        <div className="px-4 h-full flex flex-col justify-between">
                            <div>
                                {/* Card Head */}
                                <div>
                                    <h4 className="text-xs py-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Article</h4>
                                    <hr />
                                </div>

                                {/* Card body */}
                                <div className="pt-2">
                                    <h3>
                                        How do you use social media for growing traffic and sales?
                                    </h3>

                                    <div className="pt-2 flex items-center">
                                        <Image
                                            src={`/images/${nombre_carpeta_blog}/author-1.png`}
                                            width={500}
                                            height={500}
                                            alt="Logo"
                                            className="w-6"
                                        />

                                        <div className="pl-2 flex flex-col">
                                            <h5 className="text-xs">Jessica Parker</h5>
                                            <span className="text-[10px]">May, 2020 - 5 mins read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card footer */}
                            <div className="flex gap-4 pb-4">
                                {/* Likes */}
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                    </svg>

                                    <span className="ml-1 text-xs">34</span>
                                </div>

                                {/* Views */}
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>


                                    <span className="ml-1 text-xs">203</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Fin de Card 2 */}

                    {/* Card 3 */}
                    <div className="w-[282px] h-[200px] border-2 border-white rounded-3xl cursor-pointer mx-auto">
                        <div className="px-4 h-full flex flex-col justify-between">
                            <div>
                                {/* Card Head */}
                                <div>
                                    <h4 className="text-xs py-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Article</h4>
                                    <hr />
                                </div>

                                {/* Card body */}
                                <div className="pt-2">
                                    <h3>
                                        How do you use social media for growing traffic and sales?
                                    </h3>

                                    <div className="pt-2 flex items-center">
                                        <Image
                                            src={`/images/${nombre_carpeta_blog}/author-1.png`}
                                            width={500}
                                            height={500}
                                            alt="Logo"
                                            className="w-6"
                                        />

                                        <div className="pl-2 flex flex-col">
                                            <h5 className="text-xs">Jessica Parker</h5>
                                            <span className="text-[10px]">May, 2020 - 5 mins read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card footer */}
                            <div className="flex gap-4 pb-4">
                                {/* Likes */}
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                    </svg>

                                    <span className="ml-1 text-xs">34</span>
                                </div>

                                {/* Views */}
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>


                                    <span className="ml-1 text-xs">203</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Fin de Card 3 */}
                </div>

                {/* Botón */}
                <button className="border-2 mt-6 py-1 px-3 lg:mt-24 rounded-md">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">View All</span>
                </button>

            </div>
        </div>
    )
}
