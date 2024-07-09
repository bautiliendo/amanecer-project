import { useNavigate } from "react-router-dom"

export const EmptySearch = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full md:py-24 px-4 py-40">
            <div className='mx-auto grid '>
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">¿Cómo Comprar?</h2>
                <p className="my-4">
                    En nuestro e-commerce, puedes añadir productos a tu carrito y coordinar una compra o simplemente consultar detalles y precio de un producto a través de WhatsApp.
                </p>
                <ol className="list-decimal list-inside">
                    <li className="mb-2">Explora nuestros productos y añade los que te interesen al carrito.</li>
                    <li className="mb-2">Dirígete a tu carrito.</li>
                    <li className="mb-2">
                        En el carrito, encontrarás un botón con el logo de WhatsApp y el texto "Comprar".
                    </li>
                    <li className="mb-2">
                        Completa el formulario, y serás redirigido automáticamente a una conversación en WhatsApp con nuestro equipo. El mensaje
                        incluirá tus datos ingresados y la descripción de los productos que hayas seleccionado.
                    </li>
                </ol>
                <button onClick={() => navigate('/products')} className="my-4 bg-[#B29A82] text-[#68270C] w-[200px] font-bold px-4 py-2 rounded ">Ver Productos</button>
                <p className="text-gray-700">
                    <strong className='text-[#68270C]'>¡Es fácil y rápido!</strong> Si tienes alguna duda, no dudes en contactarnos.
                </p>
            </div>
        </div>
    )
}
