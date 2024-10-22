import Image from "next/image"

export default function Projects() {
    const nombre_carpeta_projects = '6.projects'

    return (
        <div className="h-dvh lg:h-screen w-screen flex flex-col items-center justify-start">
            <div className="pb-4 w-[95%] mt-4 flex flex-col items-center gap-4">
                <h2 className="text-2xl font-semibold">Our Projects</h2>

                <p className="text-center text-xs text-slate-400">
                    A project is a simple or team activity combining research and design with beat effort. Here are some of our team&apos;s projects
                </p>
            </div>

            <div className="w-[95%] lg:w-[60%] lg:h-[70%] mt-10 grid grid-rows-3 grid-flow-col gap-1 p-2 border border-white rounded-lg">
                {/* Gráficos */}
                <div className="">
                    <Image
                        src={`/images/${nombre_carpeta_projects}/image1.png`}
                        width={500}
                        height={500}
                        alt="Logo"
                        className="object-cover w-full h-full rounded-md"
                    />
                </div>

                <div className="row-span-2">
                    <Image
                        src={`/images/${nombre_carpeta_projects}/image2.png`}
                        width={500}
                        height={500}
                        alt="Logo"
                        className="object-cover w-full h-full rounded-md"
                    />
                </div>

                <div className="row-span-2">
                    <Image
                        src={`/images/${nombre_carpeta_projects}/image3.png`}
                        width={500}
                        height={500}
                        alt="Logo"
                        className="object-cover w-full h-full rounded-md"
                    />
                </div>

                <div className="">
                    <Image
                        src={`/images/${nombre_carpeta_projects}/image4.png`}
                        width={500}
                        height={500}
                        alt="Logo"
                        className="object-cover w-full h-full rounded-md"
                    />
                </div>

                <div className="">
                    <Image
                        src={`/images/${nombre_carpeta_projects}/image5.png`}
                        width={500}
                        height={500}
                        alt="Logo"
                        className="object-cover w-full h-full rounded-md"
                    />
                </div>

                <div className="row-span-2">
                    <Image
                        src={`/images/${nombre_carpeta_projects}/image6.png`}
                        width={500}
                        height={500}
                        alt="Logo"
                        className="object-cover w-full h-full rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}
