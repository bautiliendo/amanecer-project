import Cosmetologia from '../assets/unsplash-2-.webp'
import FraganciaMasc from '../assets/fraganciamasc.jpg'
import FraganciasFem from '../assets/fraganciafem.jpg'
import Bebes from '../assets/bebe.jpg'
import Cremas from '../assets/crema.jpg'
import Aromatizantes from '../assets/aromatizantes.jpg'
import Bienestar from '../assets/bienestar.jpg'

import React from "react";
import { useFilters } from '../hooks/useFilters'

export const Filters: React.FC = () => {
  const { setFilters } = useFilters();

  const handleChangeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilters({
      category: event.currentTarget.value,
      searched: ''
    });
  }

  return (
    <div className="w-full overflow-x-auto py-5">
      <div className="inline-flex justify-start min-w-max px-4">
        <ul className="flex gap-6">
          <li><button onClick={handleChangeCategory} value='fragancia-masculina' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col items-center transition-transform transform hover:border-gray-300" >Fragancia Masc.<img src={FraganciaMasc} style={{ width: 90, height: 80 }} className='rounded-xl object-cover' /> </button></li>
          <li><button onClick={handleChangeCategory} value='fragancia-femenina' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col items-center transition-transform transform hover:border-gray-300" >Fragancia Fem.<img src={FraganciasFem} style={{ width: 90, height: 80 }} className='rounded-xl object-cover' /> </button></li>
          <li><button onClick={handleChangeCategory} value='bienestar' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Bienestar<img src={Bienestar} style={{ width: 90, height: 80 }} className='rounded-xl object-cover' /></button></li>
          <li><button onClick={handleChangeCategory} value='piel' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Cremas<img src={Cremas} style={{ width: 90, height: 80 }} className='rounded-xl object-cover' /></button></li>
          <li><button onClick={handleChangeCategory} value='cosmetologia' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Cosmetología<img src={Cosmetologia} style={{ width: 90, height: 80 }} className='rounded-xl object-cover' /></button></li>
          <li><button onClick={handleChangeCategory} value='aromatizante' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Aromatizantes<img src={Aromatizantes} style={{ width: 90, height: 80 }} className='rounded-xl object-cover' /></button></li>
          <li><button onClick={handleChangeCategory} value='bebes-ninos' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Bebes<img src={Bebes} style={{ width: 90, height: 80 }} className='rounded-xl object-cover' /></button></li>
        </ul>
      </div>
    </div>
  );
};