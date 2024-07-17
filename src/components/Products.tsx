import { SearchBar } from "./common/SearchBar";
import { Filters } from "./Filters";
import { RenderProducts } from "./RenderProducts";

export const Products = () => {

  return (
    <div className='w-full text-center py-4 justify-center'>
      <div className='block lg:hidden fixed top-24 left-0 right-0 py-2.5 w-full z-10 bg-[#F2E7DD]'>
        <SearchBar />
      </div>
      <div className="sm:mt-10 mt-40">
        <Filters />
      </div>
      <RenderProducts />
    </div>
  );
};
