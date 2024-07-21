import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useOfers } from "../hooks/useOfers";
import { Link } from "react-router-dom";
import { SkeletonOfertas } from "./SkeletonOfertas";

export const Ofertas = () => {
    const { slides, currentIndex, prevSlide, nextSlide, goToSlide } = useOfers();

    if (!slides.length) {
        return <SkeletonOfertas />;
    }

    return (
        <div className="mt-2">
            <h2 className="text-xl text-[#68270C] font-bold py-1">OFERTAS SEMANALES</h2>
            <div className="relative group">
                <Link to={`/products/${encodeURIComponent(slides[currentIndex].name)}`} className='w-full h-full flex flex-col items-center'>
                    <div className="w-full max-h-[600px] bg-white border-solid border-2 rounded-lg shadow-lg flex flex-col items-center justify-center">
                        <img
                            src={slides[currentIndex].images[1]}
                            alt={slides[currentIndex].name}
                            className="max-w-full max-h-[600px] object-contain"
                        />
                    </div>

                </Link>
                <div className="absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center py-2">
                    {slides.map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className="text-2xl cursor-pointer"
                        >
                            <RxDotFilled className={slideIndex === currentIndex ? 'text-blue-500' : 'text-gray-300'} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}