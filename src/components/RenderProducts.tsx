import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { Product } from '../types';
import { MdAddShoppingCart, MdRemoveShoppingCart } from 'react-icons/md';
import { useCart } from '../hooks/useCart';

export const RenderProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { cart, addToCart, removeItemFromCart } = useCart()
    useEffect(() => {
        axios.get('http://localhost:3001/getProducts')
            .then(response => {
                console.log("Received data:", response.data);
                setProducts(response.data);
            })
            .catch(err => console.log(err))
    }, []);


    const checkProductInCart = (product: Product) => {
        return cart.some(item => item.productId === product.productId);
    }

    return (
        <>
            <ul className='flex flex-wrap gap-2 justify-center'>
                {products.map((product) => {
                    const isProductOnCart = checkProductInCart(product);
                    return (

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
                                </div>
                                {isProductOnCart ? (
                                    <button onClick={(e) => {
                                        e.stopPropagation();
                                        removeItemFromCart({ ...product, quantity: 1 });
                                    }}
                                        className='flex gap-1 justify-center bg-[#B29A82] text-[#68270C] font-bold px-4 py-2 rounded mt-4' >
                                        <p>Eliminar del carrito </p>
                                        <MdRemoveShoppingCart size={20} />
                                    </button>
                                ) : (
                                    <button onClick={(e) => {
                                        e.stopPropagation();
                                        addToCart({ ...product, quantity: 1 });
                                    }}
                                        className='flex gap-1 justify-center bg-[#B29A82] text-[#68270C] font-bold px-4 py-2 rounded mt-4' >
                                        <p>Añadir al carrito</p>
                                        <MdAddShoppingCart size={20} />
                                    </button>
                                )
                                }
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
