import { useNavigate } from "react-router-dom"
import { Products } from "./Products"
import { Ofertas } from "./Ofertas";

export const Hero: React.FC = () => {
  const navigate = useNavigate();


  return (
    <>
      <div className="w-full md:pt-24 px-4 pt-40 sm:pb-20 pb-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Amanecer By Bagués - CBA</h1>
            <p className="text-base sm:text-lg mb-6">La tienda donde descubrirás una exquisita selección de fragancias y productos para renovar tu estilo personal</p>
            <button onClick={() => navigate('/equipo')} className="bg-[#B29A82] text-[#68270C] font-bold px-4 py-2 rounded">Unirse al equipo de emprendedores</button>
          </div>
          <div className="w-full md:w-1/2 h-[350px] md:h-[500px] relative group ">
            <Ofertas />
          </div>
        </div>
      </div>
      <Products />
    </>
  )
}

