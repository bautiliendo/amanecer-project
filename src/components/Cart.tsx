import { useState } from 'react';
import { EmptyCart } from './EmptyCart'
import { Modal } from './Modal'
import { useCart } from '../hooks/useCart';
import { Link, useNavigate } from 'react-router-dom';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';

export const Cart: React.FC = () => {
  const { cart, clearCart, addToCart, removeFromCart, removeItemFromCart } = useCart();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleGoBack = () => {
    navigate(-1)
  }

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  return (
    <>
      {cart.length >= 1 ? (
        <div className="py-32 -z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button className='mb-4 flex gap-1 justify-center sm:hidden border-solid rounded-md p-1' onClick={handleGoBack}><p className='font-bold'>Volver</p><RiArrowGoBackFill size={20} className='pt-1' /></button>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="md:w-2/3">
                <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Productos en el carrito</h2>
                  <ul className="space-y-4">
                    {cart.map((product) => (
                      <li key={product._id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img className="h-24 w-24 object-cover rounded-md" src={product.images[0]} alt={product.name} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <Link to={`/products/${encodeURIComponent(product.name)}`}>
                              <p className="text-lg font-bold mb-2">{product.name}</p>
                            </Link>
                            <div className="flex items-center space-x-4 mt-2">
                              <div className="flex items-center border rounded-md">
                                <button onClick={() => removeFromCart(product)} className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition">-</button>
                                <span className="px-3 py-1 my-1 text-gray-800 font-medium">{product.quantity}</span>
                                <button onClick={() => addToCart(product)} className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition">+</button>
                              </div>
                              <button
                                onClick={() => removeItemFromCart(product)}
                                className="text-[#e76e49] hover:text-[#b84e40] transition py-1 px-3 rounded-lg border border-[#e76e49] text-sm"
                              >
                                Eliminar
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold">{(product.price * product.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <button
                      onClick={clearCart}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#e76e49] hover:bg-[#b84e40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
                    >
                      <MdRemoveShoppingCart size={20} />
                      Limpiar carrito
                    </button>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Resumen del pedido</h2>
                  <div className="space-y-2">
                    {cart.map((product) => (
                      <div key={product._id} className="flex justify-between">
                        <span>{product.name} (x{product.quantity})</span>
                        <span>{(product.price * product.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 pb-3.5 border-t border-gray-200">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpenModal(true)}
                    className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
                  >
                    <FaWhatsapp size={20} />
                    Confirmar compra
                  </button>
                </div>
              </div>
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  )
}