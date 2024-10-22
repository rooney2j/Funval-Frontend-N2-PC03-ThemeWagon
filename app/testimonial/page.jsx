import Image from "next/image"

export default function Testimonial() {
  const nombre_carpeta_testimonial = '8.testimonial'

  return (
    <div className="h-lvh w-lvw flex justify-center items-center">
      <div className="min-h-[90%] w-[95%] lg:w-2/3">
        {/* Título */}
        <div className="col-span-2 flex flex-col items-center justify-start gap-4 mb-6 lg:mb-24">
          <h2 className="text-xl lg:text-2xl">What our clients have to say</h2>
          <p className="text-xs text-slate-500 text-center lg:w-1/2">
            Our success is determined on how satisfied our customers are with the service. These reviews say we have stuff to do.
          </p>
        </div>

        {/* Testimonials */}
        {/* Testimonial 1 */}
        <div className="h-[240px] lg:h-[300px] w-full grid grid-cols-2">
          {/* Testimonial - image */}
          <div className="flex justify-center items-center lg:w-[250px]">
            <Image
              src={`/images/${nombre_carpeta_testimonial}/image1.png`}
              width={500}
              height={500}
              alt="Imagen de la persona"
              className=" object-cover w-full"
            />
          </div>

          {/* Testimonial - body */}
          <div className="pl-2 lg:pl-0 flex flex-col justify-center items-start gap-1 lg:gap-3">
            <div className="w-10 lg:w-16">
              <Image
                src={`/images/${nombre_carpeta_testimonial}/quotation.png`}
                width={500}
                height={500}
                alt="Comillas grandes"
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className="text-purple-600 text-base">Outstanding!!</h3>
            <p className="text-xs text-slate-500">
              I just wanted to drop you a little email to say thank you for all your hard work. I'm delighted I chose you as my partner. Your websites are quite simple to edit and maintain, which is fantastic.
            </p>

            <h4 className="text-xs font-semibold">Daniel Lane, <span className="text-slate-500 font-thin text-[10px]">Developer</span></h4>

            {/* Estrellas */}
            <div className="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Fin de Testimonial 1 */}
      </div>
    </div>
  )
}
