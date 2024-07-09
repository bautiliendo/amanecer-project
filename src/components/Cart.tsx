import { useState } from 'react';
import { EmptyCart } from './EmptyCart'
import { Modal } from './Modal'

export const Cart = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      {/*//TODO Acá tiene que comprobar si el cart.length >= 1 y renderizar su contenido, si no : 'EmptyCart' */}
      <EmptyCart />

      {/* //TODO: faltan clases para el BOTON QUE ACTIVA EL MODAL
                <button
                onClick={() => setOpenModal(true)}
                className=""
              ></button> */}

      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  )
}
