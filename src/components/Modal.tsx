import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
// import { useCart } from "../hooks/useCart";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose }) => {

  //todo:  hook UseModal


  if (!open) return null;
  return (
    <div onClick={onClose} className="bg-black bg-opacity-50 z-50 fixed inset-0 flex items-center justify-center ">
      <div onClick={(e) => {
        e.stopPropagation();
      }} className="bg-gray-300 w-full max-w-[600px] shadow-xl relative rounded-lg mx-8">
        <div className="flex justify-end">
          <button onClick={onClose} className="p-4 absolute hover:text-red-800">
            <MdOutlineClose />
          </button>
        </div>
        <form className="max-w-sm mx-auto p-4 sm:p-12" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="nombre" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Nombre y Apellido *</label>
            <input type="text" id="nombre" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Nombre y Apellido" required />
          </div>
          <div className="mb-2">
            <label htmlFor="ciudad" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Ciudad *</label>
            <input type="text" id="ciudad" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Córdoba Cápital" required />
          </div>
          <div className="mb-2">
            <label htmlFor="barrio" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Barrio *</label>
            <input type="text" id="barrio" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="General Paz / Arguello" required />
          </div>
          <button
            type="submit"
            className="mt-4 flex items-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition">
            <FaWhatsapp size={30} />
            Coordinar compra
          </button>
        </form>
      </div>
    </div>
  );
};
