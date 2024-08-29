import { useState, useEffect } from 'react';
import axios from 'axios';

interface Offer {
    _id: string;
    name: string;
    description: string;
    price: string;
    category: string;
    images: string[];
    isOnPromotion: boolean;
}

export const useOfers = () => {
    const [offers, setOffers] = useState<Offer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await axios.get<Offer[]>('https://backend-amanecer.up.railway.app/getOffers');
                setOffers(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching offers');
                setLoading(false);
            }
        };

        fetchOffers();
    }, []);

    return { offers, loading, error };
};