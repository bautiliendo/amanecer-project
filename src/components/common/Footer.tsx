import {
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'

export const Footer: React.FC = () => {

  const handleWhatsapp = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const mensaje = "Hola! Me contacto desde su página web para realizar una consulta"
    const numeroTel = '5493516126331';
    const whatsappLink = `https://wa.me/${numeroTel}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappLink, '_blank')
  }

  return (
    <>
      <hr className=' border-[#68270C] my-2 mx-4' />
      <div className='py-10 grid lg:grid-cols-3 gap-8 mx-4'>
        <div className='flex flex-col gap-2.5 sm:gap-5'>
          <div className=''><img src={Logo} style={{ width: 190 }} alt="Logo" /></div>
          <p className=''>Amanecer By Bagués ©</p>
          <p className=''><Link to='/' className='underline'>Términos y condiciones</Link></p>
          <p className=''> <Link to='/politicadev' className='underline'>Política de devolución</Link></p>
          <div className='flex md:w-[75%] gap-4'>
            <a href='https://www.instagram.com/amanecer_bybagues/' target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
            <button onClick={handleWhatsapp}><FaWhatsapp size={30} /></button>
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mx-6'>
          <div>
            <h6 className='font-bold text-sm sm:text-base'>Navegación</h6>
            <ul>
              <li className='py-2 text-sm hover:underline'><Link to='/'>Home</Link></li>
              <li className='py-2 text-sm hover:underline'><Link to='/products'>Productos</Link></li>
              <li className='py-2 text-sm hover:underline'><Link to='/comprar'>¿Cómo comprar?</Link></li>
              <li className='py-2 text-sm hover:underline'><Link to='/equipo'>Equipo</Link></li>
            </ul>
          </div>
          <div>
            <h6 className='font-bold text-sm sm:text-base'>Horarios de atención</h6>
            <ul>
              <li className='py-2 text-sm font-bold'>Lunes a Viernes</li>
              <p className='text-sm'>de 9:00 hs. a 18:00 hs.</p>
              <li className='py-2 text-sm font-bold'>Sábados</li>
              <p className='text-sm'>de 9:00 hs. a 13:00 hs.</p>
            </ul>
          </div>
          <div>
            <h6 className='font-bold text-sm sm:text-base'>Redes</h6>
            <ul>
              <a href='https://www.instagram.com/renovartecba/' target="_blank" rel="noopener noreferrer">
                <li className='py-2 text-sm hover:text-rose-400 hover:underline list-none'>Instagram</li>
              </a>
              <button onClick={handleWhatsapp}>
                <li className='py-2 text-sm hover:text-green-400 hover:underline list-none'>WhatsApp</li>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
