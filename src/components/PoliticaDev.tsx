
export const PoliticaDev: React.FC = () => {
    return (
        <div className="w-full md:py-24 px-4 py-40">
            <div className='mx-auto grid'>
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">Política de devolución</h2>
                <p className="my-4">
                    Antes de realizar cualquier compra, te pedimos que leas la descripción de lo que vas a comprar y nos contactes por WhatsApp si tienes alguna duda o consulta.
                </p>
                <div className="space-y-4">
                    <div>
                        <h4 className="text-lg font-semibold">Si te arrepientes:</h4>
                        <p>
                            <strong>Antes de que el producto haya sido enviado o entregado:</strong> Puedes cancelar la compra y te devolvemos tu dinero por el mismo medio por el que nos pagaste.
                        </p>
                        <p>
                            <strong>Después de que el producto haya sido enviado o entregado:</strong> Puedes devolver el producto en las mismas condiciones en que lo recibiste (sin uso, packaging cerrado y en condiciones) y te devolvemos tu dinero (no incluye gastos de envío) por el mismo medio por el que nos pagaste. Tienes 10 días desde que lo recibiste para efectuar cualquier devolución y los gastos de envío corren por tu cuenta.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Si quieres cambiarlo (producto de igual o mayor valor que haya en stock):</h4>
                        <p>
                            <strong>Antes de que el producto haya sido enviado o entregado:</strong> Te contactas con nosotros por cualquier medio disponible y abonas la diferencia, si es que hubiera alguna, de precio del producto y/o de envío.
                        </p>
                        <p>
                            <strong>Después de que el producto haya sido enviado o entregado:</strong> Tienes 10 días corridos desde el momento en que recibiste el pedido. El producto tiene que estar en las mismas condiciones en que lo recibiste (sin uso, packaging cerrado y en condiciones) y lo puedes cambiar por cualquier otro producto de igual o mayor valor (con stock disponible) abonando la diferencia. Los gastos de envío corren por tu cuenta.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Si el producto está fallado, no funciona o no se corresponde con la publicación:</h4>
                        <p>
                            Contáctanos dentro de los 10 días corridos de haberlo recibido para ponernos de acuerdo y encontrar una solución. En caso de haber gastos de envío, los mismos correrán por nuestra cuenta.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}
