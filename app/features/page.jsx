import Image from "next/image"

export default function Features() {
  const nombre_carpeta_features = '5.features'

  return (
    <div className='h-dvh md:h-screen w-screen flex items-start md:items-center justify-center'>
      <div className='w-[95%] md:w-[70%] md:h-[80%] pt-5 grid grid-cols-2 md:grid-cols-3 gap-4'>
        {/* Título */}
        <div className='col-span-2 md:col-span-3 flex flex-col items-center'>
          <h2 className="text-2xl text-center font-semibold">Features</h2>

          <p className="text-center text-xs text-slate-500 md:w-[60%]">
            We provide a number of excellent features that will undoubtedly improve the user experience. We also provide a better support system.
          </p>
        </div>

        {/* Cuadros */}
        <div className='h-[200px] flex flex-col items-center justify-evenly'>
          <Image
            src={`/images/${nombre_carpeta_features}/icon1.png`}
            width={100}
            height={100}
            alt="Logo"
          />

          <h3 className="font-medium">Encrypted Mail</h3>

          <p className="text-center text-xs text-slate-500 md:w-2/3">
            A process of encrypting email communications
          </p>
        </div>

        <div className='h-[200px] flex flex-col items-center justify-evenly'>
          <Image
            src={`/images/${nombre_carpeta_features}/icon2.png`}
            width={100}
            height={100}
            alt="Logo"
          />

          <h3 className="font-medium">Display Sharing</h3>

          <p className="text-center text-xs text-slate-500 md:w-2/3">
            With other participants, you may share your screen
          </p>
        </div>

        <div className='h-[200px] flex flex-col items-center justify-evenly'>
          <Image
            src={`/images/${nombre_carpeta_features}/icon3.png`}
            width={100}
            height={100}
            alt="Logo"
          />

          <h3 className="font-medium">Private Notebook</h3>

          <p className="text-center text-xs text-slate-500 md:w-2/3">
            Private Notebook is an application that is protected
          </p>
        </div>

        <div className='h-[200px] flex flex-col items-center justify-evenly'>
          <Image
            src={`/images/${nombre_carpeta_features}/icon4.png`}
            width={100}
            height={100}
            alt="Logo"
          />

          <h3 className="font-medium">App App Asistance</h3>

          <p className="text-center text-xs text-slate-500 md:w-2/3">
            App Assistant is quickly and effectively ran the system
          </p>
        </div>

        <div className='h-[200px] flex flex-col items-center justify-evenly'>
          <Image
            src={`/images/${nombre_carpeta_features}/icon5.png`}
            width={100}
            height={100}
            alt="Logo"
          />

          <h3 className="font-medium">Multiple Printing</h3>

          <p className="text-center text-xs text-slate-500 md:w-2/3">
            Our canvas prints are crafted on top-notch canvas
          </p>
        </div>

        <div className='h-[200px] flex flex-col items-center justify-evenly'>
          <Image
            src={`/images/${nombre_carpeta_features}/icon6.png`}
            width={100}
            height={100}
            alt="Logo"
          />

          <h3 className="font-medium">Free Sketch</h3>

          <p className="text-center text-xs text-slate-500 md:w-2/3">
            Our canvas prints are crafted on top-notch canvas
          </p>
        </div>
      </div>
    </div>
  )
}
