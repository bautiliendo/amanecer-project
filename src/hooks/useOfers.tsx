import axios from "axios";
import { useEffect, useState } from "react";


interface Slide {
    name: string;
    _id: string;
    price: string;
    images: string[];
    isOnPromotion: boolean;
}

export const useOfers = () => {
    const [slides, setSlides] = useState<Slide[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        axios.get('https://backend-amanecer.up.railway.app/getProducts')
            .then(response => {
                // console.log("Received data:", response.data);
                const promotionalSlides = response.data.filter((slide: Slide) => slide.isOnPromotion);
                setSlides(promotionalSlides);
            })
            .catch(err => console.log(err));
    }, []);


    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

    return { slides, currentIndex, setCurrentIndex, prevSlide, nextSlide, goToSlide };
}
