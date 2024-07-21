import { useContext } from "react"
import { FiltersContext } from "../context/filters"
import { FiltersContextType } from "../types"


export const useFilters = (): FiltersContextType => {
    const context = useContext(FiltersContext)

    if (context === undefined) {
        throw new Error('UseCart must be used within a CartProvider')
    }

    return context
}
