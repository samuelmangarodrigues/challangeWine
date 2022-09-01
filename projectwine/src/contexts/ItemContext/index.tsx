import { createContext, ReactNode, useContext, useState} from "react";
import { api } from "../../services";


const GetItemsContext = createContext<ContextTypes>({} as ContextTypes)
export const useGetItem=()=>useContext(GetItemsContext)

interface ContextTypes{
    getItems: () => Promise<void>
    items:Iitems[]
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


    const getItems = async () => {
        await api
            .get("/products")
            .then((response) => {
                setItems(response.data.items);
            });
    };

    return (
        <GetItemsContext.Provider value={{ getItems, items }}>
            {children}
        </GetItemsContext.Provider>

    );
}

export default GetProvider
