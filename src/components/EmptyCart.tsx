import { useNavigate } from "react-router-dom"

export const EmptyCart = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full py-32 px-4 ">
            <div className='max-w-[1240px] mx-auto grid '>
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">Tu carrito se encuentra vacio !</h2>
                <p className='my-4'>
                    Si quieres hacer una compra o consultar acerca del precio y detalles de un producto, selecciona el producto que te interese y haz clic en el botón <strong>Añadir al carrito</strong>. Luego dirígete al mismo y haz clic en el botón <strong>Comprar</strong>. ¡Nuestro equipo se pondrá en contacto contigo enseguida!
                </p>

                <button onClick={() => navigate('/products')} className="my-4 bg-[#B29A82] text-[#68270C] w-[200px] font-bold px-4 py-2 rounded ">Ver Productos</button>
            </div>
        </div>
    )
}


/* <div className='w-full bg-white py-32 px-4'>
<div className='max-w-[1240px] mx-auto grid '>
<div className='flex flex-col justify-center'>
  <h1 className='md:text-3xl sm:text-2xl text:1xl font-bold py-2'>El Carrito está vacío !</h1>
  <p className='my-8'>
    Si quieres hacer una compra o consultar acerca del precio y detalles de un producto, selecciona el producto que te interese y haz clic en el botón <strong>Añadir al carrito</strong>. Luego dirígete al mismo y haz clic en el botón <strong>Consultar</strong>. ¡Nuestro equipo se pondrá en contacto contigo!
  </p>

  <button onClick={() => navigate('/productos')} className="w-[200px] bg-[#00df9a] text-gray-900 hover:bg-[#1ea77b] py-2 px-6 my-2 rounded-full text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Ver Productos</button>
</div>
</div>
</div> */