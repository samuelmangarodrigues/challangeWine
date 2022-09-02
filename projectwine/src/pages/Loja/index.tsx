import { useEffect } from "react"
import ItemCards from "../../components/ItemCards"
import { useGetItem } from "../../contexts/ItemContext"
import { ButtonPagination, ContainerPagination, DivItems, FindProducts } from "./styled"



const Loja = () => {

    const{items,getItems,totalItems,currentItems,pages,setCurrentPage} = useGetItem()
    useEffect(() => {
        getItems();
      }, [items]);
      console.log(items)
    return (
        <>
           <FindProducts><strong>{totalItems}</strong> produtos encontrados</FindProducts>
            <DivItems>
                {currentItems.map((item)=>
                <ItemCards 
                    image={item.image} 
                    name={item.name} 
                    discount={item.discount} 
                    price={item.price} 
                    priceMember={item.priceMember} 
                    priceNonMember={item.priceNonMember}
                />)}
            </DivItems>
            <ContainerPagination>
                {Array.from(Array(pages),(item,index)=>{
                   return(
                   <ButtonPagination value={index} onClick={(e) => setCurrentPage(Number(e.currentTarget.value))}>{index+1}</ButtonPagination>
                   )
                })}
            </ContainerPagination>
        </>
    )

}
export default Loja