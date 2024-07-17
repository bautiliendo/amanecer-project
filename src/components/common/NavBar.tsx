import { useMemo, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.jpg'
import { SearchBar } from "./SearchBar";
import { useCart } from "../../hooks/useCart";

export const NavBar: React.FC = () => {
    const { cart } = useCart();

    const [nav, setNav] = useState<boolean>(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleNav = () => {
        setNav(!nav);
    }

    const cartQuantity = useMemo(() => {
        return cart.reduce((accum, item) => accum + item.quantity, 0)
    }, [cart]);

    const handleLogoRedirect = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
        if (pathname === '/') {
            window.scrollTo(0, 0)
        } else {
            navigate('/')
        }
    }

    return (
        <div className="top-0 left-0 w-full z-50 fixed sm:sticky bg-[#F2E7DD]">
            <div className='flex items-center justify-between h-30 text-[#68270C] px-4'>
                <div className="flex-shrink-0">
                    <img src={Logo} style={{ width: 190, cursor: 'pointer' }} onClick={handleLogoRedirect} alt="Logo Amanecer By Bagués" />
                </div>
                <div className="flex flex-grow justify-end items-center">
                    <ul className='hidden md:flex items-center font-bold text-md gap-10 '>
                        <li className="hidden lg:block"><SearchBar /></li>
                        <li className=' hover:scale-[1.04] '><Link to='/products'>Productos</Link></li>
                        <li className=' hover:scale-[1.04] '><Link to='/comprar'>¿Cómo comprar?</Link></li>
                        <li className=' hover:scale-[1.04] '><Link to='/equipo'>Equipo</Link></li>
                    </ul>
                    <div className='mx-10 hidden md:flex hover:scale-[1.04]'>
                        <Link to='/cart'><AiOutlineShoppingCart size={25} /></Link>
                        {
                            cart.length >= 1 ? (
                                <Link to='/cart'>
                                    <button className='absolute bg-[#68270C] text-white px-1.5 rounded-full text-xs my-1.5' >{cartQuantity}</button>
                                </Link>
                            )
                                : ''
                        }
                    </div>
                </div>

                <div className="flex md:hidden items-center justify-between w-24">
                    <div className="relative">
                        <div className=" flex items-center">
                            <Link to='/cart' >
                                <AiOutlineShoppingCart size={25} />
                            </Link>
                            {cart.length >= 1 && (

                                <Link to='/cart'>
                                    <button className='ml-1 bg-[#68270C] text-white px-1.5 rounded-full text-xs'>{cartQuantity}</button>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div>
                        {nav ? (
                            <AiOutlineClose size={25} onClick={handleNav} />
                        ) : (
                            <AiOutlineMenu size={25} onClick={handleNav} />
                        )
                        }
                    </div>
                </div>

                <div onClick={handleNav} className={nav ? 'pt-6 fixed left-0 top-0 w-[100%] h-full z-50 bg-black bg-opacity-30 md:hidden' : ''}>
                    <div onClick={(e) => {
                        e.stopPropagation();
                    }} className={nav ? 'pt-4 fixed left-0 top-0 w-[60%] h-full z-50 bg-[#F2E7DD] border-r-gray-900 ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
                        <div className="w-full">
                            <img src={Logo} style={{ width: 190, cursor: 'pointer' }} onClick={(e) => { handleLogoRedirect(e); handleNav() }} alt="Logo amancer by bagués" />
                        </div>
                        <ul className="uppercase p-4 font-bold">
                            <li className='p-4 border-b border-gray-600 hover:underline'><Link to={'/products'} onClick={handleNav}>Productos</Link></li>
                            <li className='p-4 border-b border-gray-600 hover:underline'><Link to={'/comprar'} onClick={handleNav}>¿Cómo Comprar?</Link></li>
                            <li className='p-4 border-b border-gray-600 hover:underline'><Link to={'/equipo'} onClick={handleNav}>Equipo</Link></li>
                            <li className='p-4 border-b border-gray-600'>
                                {cart.length >= 1 ? (
                                    <div className='flex gap-1 items-center'>
                                        <Link to='/cart' onClick={handleNav}><li className=' hover:underline'>Carrito</li></Link>
                                        <Link to='/cart' className='mb-4' onClick={handleNav}>
                                            <button className='absolute bg-[#68270C] text-white px-1.5 rounded-full text-xs' >{cartQuantity}</button>
                                        </Link>
                                    </div>
                                )
                                    : (
                                        <Link to='/cart' onClick={handleNav}><li className=' hover:underline'>Carrito</li></Link>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
