export const EmptySearch = () => {

    return (
        <div className="w-full md:py-24 px-4 py-40">
            <div className='mx-auto grid '>
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">¡ No se encontraron resultados para su busqueda !</h2>
                <p className='my-4'>
                    Para realizar una compra, selecciona el producto que te interese y haz click en el botón <strong>Añadir al carrito !</strong>
                </p>
            </div>
        </div>
    )
}
