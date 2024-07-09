import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"
import { useNavigate } from "react-router-dom"

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1547887538-047f814bfb64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === 2;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="min-h-screen w-full sm:pt-20 pt-32 px-2">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Amanecer By Bagués - CBA</h1>
          <p className="text-base sm:text-lg mb-6">La tienda donde descubrirás una exquisita selección de fragancias y productos para renovar tu estilo personal</p>
          <button onClick={() => navigate('/equipo')} className="bg-[#B29A82] text-[#68270C] font-bold px-4 py-2 rounded">Quiero unirme al equipo !</button>
        </div>
        <div className="w-full md:w-1/2 h-[350px] md:h-[500px] lg:h-[500px] relative group ">
        <h2 className="text-xl text-[#68270C] font-bold py-1">OFERTAS SEMANALES</h2>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center py-2">
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}