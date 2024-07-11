import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { Product } from '../types';
import { MdAddShoppingCart } from 'react-icons/md';

export const RenderProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getProducts')
            .then(response => {
                console.log("Received data:", response.data);
                setProducts(response.data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <ul className='flex flex-wrap gap-2 justify-center'> 
            {products.map(product => (
                <li key={product.productId} className='border-solid border-2 rounded-lg shadow-lg sm:max-w-[240px] sm:min-w-[240px] max-w-[170px] min-w-[170px] py-6 flex flex-col items-center transition-transform transform hover:border-gray-300'>
                    <img
                        style={{ width: 200, maxHeight: 200, minHeight: 160 }}
                        src={product.images[1]}
                        alt={product.name}
                        className='py-2 px-2' />
                    <div className='flex flex-col flex-grow items-center'>
                        <div className='font-semibold text-center text-sm' style={{ minHeight: '5em' }}>
                            <p>{product.name}</p>
                            <p>${product.price}</p>
                            <button><MdAddShoppingCart /></button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
