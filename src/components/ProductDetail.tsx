import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../hooks/useCart';
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import { HiOutlineTruck } from "react-icons/hi2";
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { Product } from '../types';
import { SkeletonProductDeatail } from './SkeletonProductDetail';

export const ProductDetail = () => {
  const { productTitle } = useParams<{ productTitle: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const product = products.find(p => p.name === decodeURIComponent(productTitle || ''))
  const { addToCart, removeItemFromCart, cart } = useCart();
  const navigate = useNavigate();

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

  if (!product) {
    return <SkeletonProductDeatail />
  }

  const isProductInCart = cart.some(item => item._id === product._id);

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className='w-full py-32 px-4'>
      <button className='mb-4 flex gap-2 justify-center sm:hidden border-solid p-1' onClick={handleGoBack}><p className='font-bold'>Volver</p><RiArrowGoBackFill size={20} className='pt-1' /></button>
      <div className="gap-2 bg-white w-full mx-auto md:flex max-w-auto min-w-auto xl:max-w-[1240px] xl:min-w-[1240px] rounded-md">
        <div className='flex justify-center items-center md:shadow-lg min-w-[40%]'>
          <img src={product.images[0]} alt={product.name} className="h-60 w-60  sm:h-80 sm:w-80 rounded-md p-3" />
        </div>
        <div className='flex flex-col shadow-lg p-2'>
          <h1 className="text-2xl font-bold mb-4 p-2">{product.name}</h1>
          <h2 className='text-xl font-bold mb-4 p-2'>{product.price}</h2>
          <p className='text-sm mb-4 p-3'>{product.description ? (
            <p>
              {product.description}
            </p>
          ) : (
            <p className='py-2'>Obten más <strong className='text-[#68270C]'>información</strong> del producto, añadiendolo al carrito, <Link to='/cart' className='underline text-[#68270C] font-bold'>dirigiendote al mismo</Link> y tocando el botón Confirmar Compra.</p>
          )
          }</p>

          <div className='flex p-3'>
            {isProductInCart ? (
              <button onClick={() => removeItemFromCart({ ...product, quantity: 1 })} className="flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-[#e76e49] hover:bg-[#b84e40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition">
                <p className='font-bold text-lg'>Eliminar del carrito</p>
                <MdRemoveShoppingCart size={25} />
              </button>
            ) : (
              <div className='flex gap-2'>
                <button onClick={() => addToCart({ ...product, quantity: 1 })} className='flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-[#00df9a] hover:bg-[#1ea77b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition'>
                  <p className='font-bold text-lg'>Añadir al carrito</p>
                  <MdAddShoppingCart size={25} />
                </button>
              </div>
            )}
          </div>
          <div className='p-3 flex gap-2 mb-2'>
            <HiOutlineTruck size={25} />
            <p className='font-bold'> Envío <strong className='text-[#68270C]'>GRATIS</strong> a Córdoba Capital</p>
          </div>
        </div>
      </div>
    </div>

  )
}
