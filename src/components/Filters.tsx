// import { useFiltersContext } from "../hooks/useFiltersContext";

import React from "react";

export const Filters: React.FC = () => {
//   const { setFilters } = useFiltersContext();

  const handleChangeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setFilters({
    //   category: event.currentTarget.value,
    //   searched: ''
    // });
  }

  return (
    <div className="w-full overflow-x-auto py-2">
      <div className="inline-flex justify-start min-w-max px-4">
        <ul className="flex gap-1">
          <li><button onClick={handleChangeCategory} value='fragancias' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col items-center transition-transform transform hover:border-gray-300" >Fragancias (3)<img  style={{ width: 90, height: 80 }} /> </button></li>
          <li><button onClick={handleChangeCategory} value='bienestar' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Bienestar<img style={{ width: 90, height: 80 }} className="pr-2" /></button></li>
          <li><button onClick={handleChangeCategory} value='cremas' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Cremas<img style={{ width: 90, height: 80 }} /></button></li>
          <li><button onClick={handleChangeCategory} value='cosmetología' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Cosmetología<img style={{ width: 90, height: 80 }} /></button></li>
          <li><button onClick={handleChangeCategory} value='aromatizantes' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Aromatizantes<img style={{ width: 90, height: 80 }} /></button></li>
          <li><button onClick={handleChangeCategory} value='bebes-adolescentes' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Bebes / adolescentes<img style={{ width: 90, height: 80 }} /></button></li>
        </ul>
      </div>
    </div>
  );
};