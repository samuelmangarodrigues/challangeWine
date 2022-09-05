import  {createContext,useEffect,ReactNode,useContext, useState,Dispatch,SetStateAction} from "react"
import { useItem } from "../ItemContext"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getInitialState = () => {
    const cartt = localStorage.getItem('cartt')
    return cartt ? JSON.parse(cartt) : []
}

const CartContext = createContext<ContextTypesCart>({} as ContextTypesCart)
export const useCart =()=> useContext(CartContext)


interface ContextTypesCart{
    cart:ICart[]
    addCart:(id:number) => void
    deleteCart:(id:number) => void
    totalValue:number
    addQntCart:(id:number)=>void
    subQntCart:(id:number)=>void
    setCart:Dispatch<SetStateAction<ICart[]>>
    finalizePurchase:() => void
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
    classification:string
    volume:string
}
interface Props{

    children:ReactNode
}

const CartProvider=({children}:Props)=>{
    const [cart,setCart] = useState<ICart[]>(getInitialState)

    

    const {items} = useItem()

    const addCart=(id:number)=>{
        const copyCart = [...cart]
        const item = copyCart.find((prod)=>prod.id === id )
        if(!item){
            const prod = items.find((prod)=>prod.id === id)
            setCart([...copyCart,{ ...prod!,qnt:1}])
            toast.success("Item adicionado ao carrinho!")            
        }
        else{
            toast.error("Item já adicionado ao carrinho")
        }
    }
    const addQntCart=(id:number)=>{
        const copyCart=[...cart]
        const item = copyCart.find((prod)=>prod.id === id)

        if(item){
            item.qnt+=1
            setCart(copyCart)
        }
    }
    const subQntCart=(id:number)=>{
        const copyCart = [...cart]
        const item = copyCart.find((p)=>p.id === id)

        if(item && item.qnt > 1){
            item.qnt-=1
            setCart(copyCart)
        }
        else{
            const arrayFiltered = copyCart.filter((c)=>c.id !== id)
            setCart(arrayFiltered)
        }
        
    }

    const deleteCart=(id:number)=>{
        const copyCart = [...cart]
        const item = copyCart.find((p)=>p.id === id)

        if(item){
            const arrayFiltered = copyCart.filter((c)=>c.id !== id)
            setCart(arrayFiltered)
        }
    }
    const finalizePurchase=()=>{
        localStorage.clear()
        setCart([])
    }

    const totalValue=cart.reduce((acc,val)=>acc+(val.priceNonMember*val.qnt),0)
    useEffect(() => {
        localStorage.setItem('cartt', JSON.stringify(cart))
      }, [cart])
    
  
    return (
        <CartContext.Provider value={{addCart,deleteCart,cart,addQntCart,subQntCart,totalValue,setCart,finalizePurchase}}>{children}</CartContext.Provider>
    )

}
export default CartProvider