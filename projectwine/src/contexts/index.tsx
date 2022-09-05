import { ReactNode } from "react"
import GetProvider from "./ItemContext"
import CartProvider from "./CartContext"
import FilterProvider from "./FilterPriceContext"

interface Props{
    children:ReactNode
}


export const AppProvider=({children}:Props)=>{
return(
    <>
    
    <GetProvider>
        <CartProvider>
            <FilterProvider>
                {children}
            </FilterProvider>
        </CartProvider>
    </GetProvider>
    </>)
}