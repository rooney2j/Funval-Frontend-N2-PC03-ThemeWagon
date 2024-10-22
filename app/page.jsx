import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const nombre_carpeta_home = '2.home'

  return (
    <>
      <div className="h-screen w-screen bg-[url('/images/2.home/hero-bg.png')]">
        <Navbar />

        {/* Contenedor del Hero */}
        <div className="h-[70%] flex justify-center items-center">

          {/* Cuerpo del Home */}
          <div className="h-[50%] w-[60%] bg-transparent grid grid-cols-2">
            {/* Columna de la Izquierda */}
            <div>
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
                  Bootstrap 5 theme
                </h2>

                <h3 className="text-3xl font-light">crafted by <span className="font-normal">ThemeWagon</span></h3>

                <p className="text-xs font-thin max-w-[80%]">
                  ThemeWagon offers an wide array of category-oriented Free and Premium Bootstrap HTML Templates and Themes.
                </p>
              </div>

              <button type="button" className="mt-6 py-1 px-2 text-xs text-white border bg-gradient-to-r from-purple-400 to-blue-400 shadow-md rounded-md">
                Check Demo
              </button>
            </div>
            {/* Fin de Columna de la Izquierda */}

            {/* Columna de la Derecha */}
            <div className="flex flex-col justify-end">
              <Image
                src="/images/2.home/hero.png"
                width={500}
                height={500}
                alt="Imagen de un grupo de amigos"
              />
            </div>
            {/* Fin de Columna de la Derecha */}
          </div>
          {/* Fin del Cuerpo del Home */}
        </div>
        {/* Fin del contenedor del Hero */}


        {/* Contenedor del Footer del Home */}
        <div className="w-[60%] h-20 mx-auto mt-8 p-2 border-y-2 flex items-center">
          {/* Cuerpo del Footer del Home */}
          <div className="flex h-5 w-full justify-between">
            <Image
              src="/images/2.home/google.png"
              width={90}
              height={90}
              alt="Google"
            />

            <Image
              src="/images/2.home/netflix.png"
              width={90}
              height={90}
              alt="Google"
            />

            <Image
              src="/images/2.home/microsoft.png"
              width={90}
              height={90}
              alt="Google"
            />

            <Image
              src="/images/2.home/mailbuster.png"
              width={90}
              height={10}
              alt="Google"
            />

            <Image
              src="/images/2.home/themewagon.png"
              width={90}
              height={90}
              alt="Google"
            />
          </div>
          {/* Fin del Cuerpo del Footer del Home */}
        </div>
        {/* Fin del Contenedor del Footer del Home */}
      </div>
    </>
  );
}
