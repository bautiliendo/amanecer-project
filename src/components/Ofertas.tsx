import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useOfers } from "../hooks/useOfers";

export const Ofertas = () => {
    const { slides, currentIndex, prevSlide, nextSlide, goToSlide } = useOfers();

    if (!slides.length) {
        return <div>Loading...</div>; // Opcional: mostrar un mensaje de carga
    }

    return (
        <div className="relative w-full h-full">
            <h2 className="text-xl text-[#68270C] font-bold py-1">OFERTAS SEMANALES</h2>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].images[1]})` }}
                className="w-full h-full rounded-2xl bg-center bg-contain duration-500"
            ></div>
            <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
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
    );
}
