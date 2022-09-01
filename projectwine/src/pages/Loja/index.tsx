import { useEffect } from "react"
import ItemCards from "../../components/ItemCards"
import { useGetItem } from "../../contexts/ItemContext"
import { DivItems } from "./styled"



const Loja = () => {

    const{items,getItems} = useGetItem()

    useEffect(() => {
        getItems();
      }, [items]);
      console.log(items)
    return (
        <DivItems>
            {items.map((item)=>
            <ItemCards 
                image={item.image} 
                name={item.name} 
                discount={item.discount} 
                price={item.price} 
                priceMember={item.priceMember} 
                priceNonMember={item.priceNonMember}
            />)}
        </DivItems>
    )

}
export default Loja