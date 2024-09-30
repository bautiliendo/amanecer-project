import React from 'react';
import { useFilters } from '../hooks/useFilters'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Filters: React.FC = () => {
  const { setFilters, setShowMore, filters } = useFilters();
  const { isOpen, setIsOpen } = useFilters();

  const handleChangeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilters({
      category: event.currentTarget.value,
      searched: ''
    });
    setShowMore(false);
    setIsOpen(false);
  }

  const toggleMenu = () => setIsOpen(!isOpen);

  const categories = [
    { value: 'babies', label: 'Babies' },
    { value: 'vespero', label: 'Vespero' },
    { value: 'wanna-be', label: 'Wanna Be' },
    { value: 'croma', label: 'Croma' },
    { value: 'deco-esencias', label: 'Deco Esencias' },
    { value: 'deco-oriental', label: 'Deco Oriental' },
    { value: 'etape', label: 'Étape' },
    { value: 'fragancia-femenina', label: 'Fragancia Fem.' },
    { value: 'fragancia-masculina', label: 'Fragancia Masc.' },
    { value: 'semplice', label: 'Semplice' },
    // { value: 'box', label: 'Box' },
    { value: 'patagonia', label: 'Patagonia' },
    { value: 'style', label: 'Style' },
    { value: 'bioetape', label: 'Bioétape' },
  ];

  return (
    <div className="w-full mb-5">
      <button
        className="flex items-center text-black bg-[#F2E7DD] rounded-md transition-all duration-300 px-4 py-6"
        onClick={toggleMenu}
      >
        <span className="text-xl font-bold">Categorías</span>
        <AiOutlineMenu className="mx-2 text-black" />
        <span className="text-xl font-bold">{filters.category.toUpperCase()}</span>
      </button>

      {/* Overlay */}
      <div
        className={isOpen ? 'fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30' : 'hidden'}
        onClick={toggleMenu}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#F2E7DD] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        <div className="flex justify-between items-center p-4 border-b pt-9">
          <h2 className="text-xl font-bold text-black">Categorías</h2>
          <button onClick={toggleMenu} className="text-black">
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div className="p-4 overflow-y-auto flex-grow">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={handleChangeCategory}
              value={category.value}
              className="w-full text-black font-medium py-2 px-4 rounded-md flex justify-start items-center transition-all duration-300 hover:bg-gray-200 mb-2"
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};