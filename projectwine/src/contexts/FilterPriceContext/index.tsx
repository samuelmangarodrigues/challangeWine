import {useContext,createContext,useState,useEffect,Dispatch,SetStateAction,ReactNode} from "react"
import { useItem } from "../ItemContext"


interface Iitems{
    id:number
    image:string
    name:string
    price:number
    discount:number
    priceMember:number
    priceNonMember:number
    type:string
    classification:string
    size:string
    rating:number
    avaliations:number
    country:string
    region:string
    flag:string
    sommelierComment:string
}
interface Props{
    children:ReactNode
}

interface ContextTypes{
    alternRadio:(setValue: Dispatch<SetStateAction<boolean>>, setValue2: Dispatch<SetStateAction<boolean>>)=>void
    first:Iitems[]
    third:Iitems[]
    firstBoll:boolean
    setFirstBoolean:Dispatch<SetStateAction<boolean>>
    setThirth:Dispatch<SetStateAction<boolean>>
    thirthBoll:boolean
}
const FilterContext = createContext<ContextTypes>( {} as ContextTypes)
export const useFilterPrice = ()=> useContext(FilterContext)


const FilterProvider=({children}:Props)=>{


const [firstBoll,setFirstBoolean]=useState(false)
const[thirthBoll,setThirth]=useState(false)

const {items,setFilteredProds} = useItem()

const  first =  items.filter((i)=>i.priceNonMember>=100 && i.priceNonMember<=200)
const third =  items.filter((i)=>i.priceNonMember>=300)

const alternRadio = (setValue:Dispatch<SetStateAction<boolean>>,
    setValue2:Dispatch<SetStateAction<boolean>>)=>{

    setValue(true)
    setValue2(false)
}
    
useEffect(()=>{
    if(firstBoll){
        setFilteredProds(first)
    }
    if(thirthBoll){
        setFilteredProds(third)
    }
},[firstBoll,thirthBoll,setFilteredProds,first,third])


return (
   <FilterContext.Provider value={{alternRadio,first,firstBoll,setFirstBoolean,setThirth,third,thirthBoll}}>{children}</FilterContext.Provider>
)
}

export default FilterProvider