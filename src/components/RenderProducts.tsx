import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { Product } from '../types';
import { MdAddShoppingCart, MdRemoveShoppingCart } from 'react-icons/md';
import { useCart } from '../hooks/useCart';
import { EmptySearch } from './EmptySearch';
import { Link } from 'react-router-dom';
import { useFilters } from '../hooks/useFilters';
import { Button } from './common/Button';

export const RenderProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { cart, addToCart, removeItemFromCart } = useCart()
    const { filterProducts, showMore, setShowMore } = useFilters();

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL
        axios.get(`${apiUrl}/getProducts`)
          .then(response => {
            const sortedProducts = response.data.sort((a: Product, b: Product) => {
              return a.name.localeCompare(b.name);
            });
            setProducts(sortedProducts);
          })
          .catch(err => console.log(err))
      }, []);


    const checkProductInCart = useCallback((product: Product) => {
        return cart.some(item => item._id === product._id);
    }, [cart]);

    const filteredProducts = filterProducts(products)
    const filteredProductsShowMore = showMore ? filteredProducts : filteredProducts.slice(0, 12);

    return (
        <>
            {
                filteredProductsShowMore.length >= 1 ? (
                    <>
                        <ul className=' flex flex-wrap justify-center max-w-[1500px] mx-auto gap-2 mt-2'>
                            {filteredProductsShowMore.map((product) => {
                                const isProductnCart = checkProductInCart(product);
                                return (
                                    <li key={product._id} className='bg-white border-solid border-2 rounded-lg shadow-lg sm:max-w-[250px] sm:min-w-[250px] max-w-[170px] min-w-[170px] py-6 flex flex-col items-center transition-transform transform hover:border-gray-300'>
                                        <Link to={`/products/${encodeURIComponent(product.name)}`} className='w-full h-full flex flex-col items-center'>
                                            <img
                                                style={{ width: 200, maxHeight: 200, minHeight: 160 }}
                                                src={product.images[0]}
                                                alt={product.name}
                                                className='py-2 px-2' />
                                            <div className='flex flex-col flex-grow items-center'>
                                                <div className='font-semibold text-center text-sm' style={{ minHeight: '5em' }}>
                                                    {(product.name).slice(0,55)}
                                                </div>
                                                <span className='font-semibold'>{product.price}</span>
                                            </div>
                                        </Link>
                                        <div className='mt-2 flex gap-2 items-center'>
                                            <div className='font-semibold text-center text-sm'>
                                            </div>
                                            {
                                                isProductnCart
                                                    ?
                                                    <button onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeItemFromCart({ ...product, quantity: 1 });
                                                    }}
                                                        className="flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-[#e76e49] hover:bg-[#b84e40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition">
                                                        <p>Eliminar</p>
                                                        <MdRemoveShoppingCart size={20} />
                                                    </button>
                                                    :
                                                    <div className='flex gap-2'>
                                                        <button onClick={(e) => {
                                                            e.stopPropagation();
                                                            addToCart({ ...product, quantity: 1 });
                                                        }}
                                                            className='flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-[#00df9a] hover:bg-[#1ea77b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition' >
                                                            <p>Añadir al carrito</p>
                                                            <MdAddShoppingCart size={20} />
                                                        </button>
                                                    </div>
                                            }
                                        </div>
                                    </li>
                                );
                            })}
                        </ul >
                        {(!showMore && filteredProducts.length >= 12) && (
                            <div className="flex justify-center mt-8">
                                <Button text={"Ver todos"} onClick={() => setShowMore(true)} />
                            </div>
                        )}
                        {showMore && filteredProducts.length > 12 && (
                            <div className="flex justify-center mt-8">
                                <Button text={"Mostrar menos"} onClick={() => setShowMore(false)} />
                            </div>
                        )}
                    </>
                ) : (
                    <EmptySearch />
                )
            }
        </>
    )
}