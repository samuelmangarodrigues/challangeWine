import { createContext, Dispatch, DispatchWithoutAction, ReactNode, SetStateAction, useContext, useState} from "react";
import { api } from "../../services";


const GetItemsContext = createContext<ContextTypes>({} as ContextTypes)
export const useGetItem=()=>useContext(GetItemsContext)

interface ContextTypes{
    getItems: () => Promise<void>
    items:Iitems[]
    totalItems:number | undefined
    currentItems:Iitems[]
    pages:number
    setCurrentPage:Dispatch<SetStateAction<number>>
}
interface Props {
    children: ReactNode;
  }

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

function GetProvider({ children }: Props) {

    const [items, setItems] = useState<Iitems[]>([]);
    const [totalItems,setTotalItems] = useState<number>(0)
    const [currentPage,setCurrentPage] = useState(1)
    const [itemsPerPage,setIntemsPerPage] = useState(9)

    
    
    const getItems = async () => {
        await api
        .get("/products")
        .then((response) => {
            setItems(response.data.items);
            setTotalItems(response.data.totalItems)
        });
    }; 

    const pages = Math.ceil(totalItems / itemsPerPage)
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = items.slice(startIndex,endIndex)

    return (    
        <GetItemsContext.Provider value={{ getItems, items,totalItems,currentItems,pages,setCurrentPage}}>
            {children}
        </GetItemsContext.Provider>

    );
}

export default GetProvider
