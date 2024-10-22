import Image from "next/image"

export default function Details() {
    const nombre_carpeta_details = '4.details'

    return (
        <div className="h-[650px] w-[1300px] flex justify-center items-center">
            <div className="h-[600px] w-[570px] grid grid-cols-2">
                <div className="grid grid-rows-2">
                    {/* Imagen superior izquierda */}
                    <div className="flex justify-start items-start">
                        <div>
                            <Image
                                src={`/images/${nombre_carpeta_details}/illustration3.png`}
                                width={280}
                                height={200}
                                alt="Una PC"
                            />
                        </div>
                    </div>

                    {/* Texto inferior izquierda */}
                    <div className="pr-14 flex flex-col items-start justify-center text-[8px] gap-2">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-medium">Devoted to defining the cutting edge</h3>
                            <p className="font-thin">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eveniet doloribus nam fugit quod obcaecati magni recusandae nobis consectetur, tenetur corporis.
                            </p>

                            <p className="font-thin">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quae consequuntur aut provident, maiores id eligendi voluptatum quam quia ullam?
                            </p>
                        </div>

                        <button className="py-1 px-2 border-2 rounded-lg shadow bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:border-white">
                            Read More
                        </button>
                    </div>
                </div>

                <div className="grid grid-rows-2">
                    {/* Texto superior derecha */}
                    <div className="pl-14 flex flex-col items-start justify-center text-[8px] gap-2">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-medium">A creative team which builds stunning UI/UX</h3>
                            <p className="font-thin">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eveniet doloribus nam fugit quod obcaecati magni recusandae nobis consectetur, tenetur corporis. Itaque ipsa recusandae illo?
                            </p>

                            <p className="font-thin">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quae consequuntur aut provident, maiores id eligendi voluptatum quam quia ullam?
                            </p>
                        </div>

                        <button className="py-1 px-2 border-2 rounded-lg shadow bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:border-white">
                            Read More
                        </button>
                    </div>

                    {/* Imagen inferior derecha */}
                    <div className="flex justify-end items-end">
                        <div>
                            <Image
                                src={`/images/${nombre_carpeta_details}/illustration6.png`}
                                width={280}
                                height={200}
                                alt="Una familia feliz"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
