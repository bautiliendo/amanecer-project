import { createContext, useState } from "react";
import { FiltersContextType, Product, ProviderProps } from "../types";


export const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<ProviderProps> = ({ children }) => {
    const [filters, setFilters] = useState({
        category: 'fragancia-femenina',
        searched: ''
    })

    const filterProducts = (products: Product[]) => {
        return products.filter((product) => {
            const matchesCategory = filters.category === 'all' || product.category === filters.category

            if (filters.searched) {
                const searchWords = filters.searched.toLowerCase().split(' ');
                const productWords = product.name.toLowerCase().split(' ');

                const matchesSearch = searchWords.every(word =>
                    productWords.some(productWord => productWord.includes(word))
                );

                return matchesSearch;
            } else {
                return matchesCategory;
            }
        });
    };

    return (

        <FiltersContext.Provider value={{ filters, setFilters, filterProducts }}>
            {children}
        </FiltersContext.Provider>
    )
}