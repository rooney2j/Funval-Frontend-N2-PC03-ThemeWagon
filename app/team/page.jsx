import Image from "next/image"

export default function Team() {
    const nombre_carpeta_team = '7.team'

    return (
        <div className="h-dvh lg:h-screen w-screen flex flex-col items-center justify-start">
            <div className="pb-4 w-[95%] mt-4 flex flex-col items-center gap-4">
                <h2 className="text-2xl font-semibold">Our Team</h2>

                <p className="text-center text-xs text-slate-400">
                    People from various origins, cultures and personalities make up our team. This blend makes it a powerful team
                </p>
            </div>

            <div className="mt-10 lg:h-[60%] w-[95%] lg:w-[75%] grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col items-center justify-start lg:h-full lg:w-full">
                    <Image
                        src={`/images/${nombre_carpeta_team}/image1.png`}
                        width={500}
                        height={500}
                        alt="Logo"
                    />

                    <h3 className="text-center font-medium text-sm">John Adams</h3>
                    <h4 className="text-center text-slate-400 text-xs">CEO</h4>
                </div>

                <div className="flex flex-col items-center justify-start lg:h-full lg:w-full">
                    <Image
                        src={`/images/${nombre_carpeta_team}/image2.png`}
                        width={500}
                        height={500}
                        alt="Logo"
                    />

                    <h3 className="text-center font-medium text-sm">Carrey Johnson</h3>
                    <h4 className="text-center text-slate-400 text-xs">Senior Developer</h4>
                </div>

                <div className="flex flex-col items-center justify-start lg:h-full lg:w-full">
                    <Image
                        src={`/images/${nombre_carpeta_team}/image3.png`}
                        width={500}
                        height={500}
                        alt="Logo"
                    />

                    <h3 className="text-center font-medium text-sm">Ray Marie</h3>
                    <h4 className="text-center text-slate-400 text-xs">Developer</h4>
                </div>

                <div className="flex flex-col items-center justify-start lg:h-full lg:w-full">
                    <Image
                        src={`/images/${nombre_carpeta_team}/image4.png`}
                        width={500}
                        height={500}
                        alt="Logo"
                    />

                    <h3 className="text-center font-medium text-sm">Austin Min</h3>
                    <h4 className="text-center text-slate-400 text-xs">Designer</h4>
                </div>
            </div>

            <button className="mt-10 border-2 shadow-lg rounded-md px-3 py-2 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
                View Full Team
            </button>
        </div>
    )
}
