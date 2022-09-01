import { ReactNode } from "react"
import GetProvider from "./ItemContext"

interface Props{
    children:ReactNode
}


export const AppProvider=({children}:Props)=>{
return(
    
    <GetProvider>{children}</GetProvider>)
}