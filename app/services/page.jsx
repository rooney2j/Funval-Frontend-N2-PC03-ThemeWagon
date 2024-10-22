import Image from "next/image"
import Link from "next/link"

export default function Services() {
    const nombre_carpeta_services = '3.services'

    return (
        <div className="min-h-screen w-min-[500px] w-screen flex flex-col items-center justify-between pb-4 bg-[url('/images/3.services/service-bg-2.png')]">
            <div className="max-w-[33%] pt-2 flex flex-col gap-3">
                <h2 className="text-3xl text-center">Service</h2>
                <p className="w-full text-xs font-light text-center">
                    We offer youth with chances for career development in their practice. We also support a wide range of services to ensure cliente satisfaction
                </p>
            </div>

            {/* Contenedor de Cards */}
            <div className="w-screen flex justify-center">
                <div className="h-[400px] w-[800px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
                    {/* Card 1 */}
                    <div className="h-[380px] w-[250px] border border-white hover:bg-white rounded-3xl flex flex-col justify-between">
                        <div className="px-7 py-5 flex flex-col justify-between items-center">
                            <div className="h-[180px] p-5">
                                <Image
                                    src={`/images/${nombre_carpeta_services}/icon1.png`}
                                    width={100}
                                    height={100}
                                    alt="Icono"
                                />
                            </div>

                            <div className="h-[180px] pb-9 flex flex-col justify-between">
                                <h3 className="text-start">Send Texts Instantly</h3>

                                <p className="text-xs font-light">
                                    Financial planning, forecasting and adjusting rapidly with customer demands and budgets
                                </p>

                                <Link href="#" className="flex items-center text-blue-600">
                                    Learn More &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>

                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Fin de Card 1 */}

                    {/* Card 2 */}
                    <div className="h-[380px] w-[250px] border border-white hover:bg-white rounded-3xl flex flex-col justify-between">
                        <div className="px-7 py-5 flex flex-col justify-between items-center">
                            <div className="h-[180px] p-5">
                                <Image
                                    src={`/images/${nombre_carpeta_services}/icon2.png`}
                                    width={100}
                                    height={100}
                                    alt="Icono"
                                />
                            </div>

                            <div className="h-[180px] pb-9 flex flex-col justify-between">
                                <h3 className="text-start">Better Organized</h3>

                                <p className="text-xs font-light">
                                    Latest technology and experienced guidance, trained HR specialists to keep updated.
                                </p>

                                <Link href="#" className="flex items-center text-blue-600">
                                    Learn More &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>

                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Fin de Card 2 */}

                    {/* Card 3 */}
                    <div className="h-[380px] w-[250px] border border-white hover:bg-white rounded-3xl flex flex-col justify-between">
                        <div className="px-7 py-5 flex flex-col justify-between items-center">
                            <div className="h-[180px] p-5">
                                <Image
                                    src={`/images/${nombre_carpeta_services}/icon3.png`}
                                    width={100}
                                    height={100}
                                    alt="Icono"
                                />
                            </div>

                            <div className="h-[180px] pb-9 flex flex-col justify-between">
                                <h3 className="text-start">Analytical Statistics</h3>

                                <p className="text-xs font-light">
                                    Messages, real-time reminders, memos, and many more will keep your team in sync.
                                </p>

                                <Link href="#" className="flex items-center text-blue-600">
                                    Learn More &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>

                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Fin de Card 3 */}
                </div>
            </div>
        </div>
    )
}
