import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { SwiperProps } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useOfers } from '../hooks/useOfers';
import { SkeletonOfertas } from './SkeletonOfertas';
import { Link } from 'react-router-dom';

const Ofertas: React.FC = () => {
    const { offers, loading, error } = useOfers();

    if (loading) return <SkeletonOfertas />
    if (error) return <p className="text-center text-red-500">{error}</p>;

    const swiperParams: SwiperProps = {
        modules: [Navigation, Pagination],
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: true,
        pagination: { clickable: true },
        loop: true,
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <Swiper {...swiperParams} className="w-full">
                {offers.map((offer) => (
                    <SwiperSlide key={offer._id} className="flex flex-col items-center p-4">
                        <Link to={`/products/${encodeURIComponent(offer.name)}`}>
                            <div className="relative w-full aspect-w-16 aspect-h-9">
                                <img
                                    src={offer.images[1]} // Usamos la segunda imagen del array
                                    loading="lazy"
                                    className="object-cover w-full h-full"
                                    alt={offer.name}
                                />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Ofertas;