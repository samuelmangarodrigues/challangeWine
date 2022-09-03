import  {createContext,ReactNode,useContext, useState} from "react"
import { useItem } from "../ItemContext"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartContext = createContext<ContextTypesCart>({} as ContextTypesCart)
export const useCart =()=> useContext(CartContext)


interface ContextTypesCart{
    addCart:(id:number) => void
    deleteCart:(id:number) => void
    cart:ICart[]

}

interface ICart{
    id:number
    image:string
    name:string
    price:number
    qnt:number
    priceMember:number
    priceNonMember:number
    country:string
}
interface Props{

    children:ReactNode
}

const CartProvider=({children}:Props)=>{
    const [cart,setCart] = useState<ICart[]>([])
    const {items} = useItem()

    const addCart=(id:number)=>{

        const item = cart.find((prod)=>prod.id === id )
        if(!item){
            const prod = items.find((prod)=>prod.id === id)
            setCart([...cart,{ ...prod!,qnt:1}])
            toast.success("Item adicionado ao carrinho!")            
        }
        if(item){
            item.qnt+=1
        }
    }

    const deleteCart=(id:number)=>{
        const copyCart = [...cart]
        const item = copyCart.find((p)=>p.id === id)

        if(item && item?.qnt > 1){
            item.qnt-=1
            setCart(copyCart)
        }
        else{
            const arrayFiltered = copyCart.filter((c)=>c.id !== id)
            setCart(arrayFiltered)
        }
    }

    return (
        <CartContext.Provider value={{addCart,deleteCart,cart}}>{children}</CartContext.Provider>
    )

}
export default CartProvider