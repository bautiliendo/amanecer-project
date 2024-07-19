import { useNavigate } from "react-router-dom"
import { Button } from "./common/Button";

export const EmptyCart = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full md:py-24 px-4 py-40">
            <div className='mx-auto grid '>
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">¡ Tu carrito se encuentra vacío !</h2>
                <p className='my-4 '>
                    Si quieres hacer una compra o consultar acerca del precio y detalles de un producto, selecciona el producto que te interese y haz clic en el botón <strong>Añadir al carrito</strong>. Luego dirígete al mismo y haz clic en el botón <strong>Comprar</strong>. ¡Nuestro equipo se pondrá en contacto contigo enseguida!
                </p>
                <div className="mt-2">
                    <Button text={"Ver productos"} onClick={() => navigate('/products')} />
                </div>
            </div>
        </div>
    )
}
