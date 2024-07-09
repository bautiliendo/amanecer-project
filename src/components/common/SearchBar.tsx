import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
// import { useFiltersContext } from "../hooks/useFiltersContext";
// import { useLocation, useNavigate } from "react-router-dom";

export const SearchBar: React.FC = () => {
  // const { pathname } = useLocation();
  // const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  // const { setFilters } = useFiltersContext()

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearchInput(event.target.value);
  }

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     if ((searchInput != '') && !(searchInput.startsWith(' '))) {

    //         setFilters({
    //             category: '',
    //             searched: searchInput
    //         });
    //         navigate('/productos')
    //         if (pathname != '/') {
    //             window.scrollTo(0, 0);
    //         }
    //     } else return
  }

  return (
    <div className="justify-center hidden lg:flex">
      <form className="flex w-full max-w-md mx-4 border-2 border-yellow-800 rounded-lg overflow-hidden" onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Buscar producto'
          className="flex-grow px-4 py-2 bg-[#F2E7DD] text-gray-700 focus:outline-none"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button
          type="submit"
          className="flex items-center justify-center px-4 py-2 bg-[#68270C] text-white hover:bg-[#50200B] focus:outline-none"
        >
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
}