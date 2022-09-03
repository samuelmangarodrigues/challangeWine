import { ReactNode } from "react"
import GetProvider from "./ItemContext"
import CartProvider from "./CartContext"

interface Props{
    children:ReactNode
}


export const AppProvider=({children}:Props)=>{
return(
    <>
    
    <GetProvider>
        <CartProvider>
            {children}
        </CartProvider>
    </GetProvider>
    </>)
}