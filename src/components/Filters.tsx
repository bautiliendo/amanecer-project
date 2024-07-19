import Cosmetologia from '../assets/unsplash-2-.webp'
import Fragancias from '../assets/unsplash-1-.webp'
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
    <div className="w-full overflow-x-auto py-2">
      <div className="inline-flex justify-start min-w-max px-4">
        <ul className="flex gap-6">
          <li><button onClick={handleChangeCategory} value='fragancia-masculina' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col items-center transition-transform transform hover:border-gray-300" >Fragancias (3)<img src={Fragancias} style={{ width: 90, height: 80 }} className='rounded-xl object-cover' /> </button></li>
          <li><button onClick={handleChangeCategory} value='bienestar' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Bienestar<img src={Bienestar} style={{ width: 90, height: 80 }} className='rounded-xl object-cover' /></button></li>
          <li><button onClick={handleChangeCategory} value='cremas' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Cremas<img src={Cremas} style={{ width: 90, height: 80 }} className='rounded-xl object-cover' /></button></li>
          <li><button onClick={handleChangeCategory} value='cosmetología' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Cosmetología<img src={Cosmetologia} style={{ width: 90, height: 80 }} className='rounded-xl object-cover' /></button></li>
          <li><button onClick={handleChangeCategory} value='aromatizantes' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Aromatizantes<img src={Aromatizantes} style={{ width: 90, height: 80 }} className='rounded-xl object-cover' /></button></li>
          <li><button onClick={handleChangeCategory} value='bebes-adolescentes' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Bebes<img src={Bebes} style={{ width: 90, height: 80 }} className='rounded-xl object-cover' /></button></li>
        </ul>
      </div>
    </div>
  );
};