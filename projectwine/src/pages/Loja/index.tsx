import { useEffect} from "react"
import ItemCards from "../../components/ItemCards"
import { useGetItem } from "../../contexts/ItemContext"
import { ButtonPagination, ButtonSearch, ContainerPagination, ContainerSearch, ContainerStore, DivItems, FindProducts, InputSearch } from "./styled"
import {useState} from "react"
import { IoSearchCircleOutline } from "react-icons/io5"

const Loja = () => {


    const{items,getItems,totalItems,currentItems,pages,setCurrentPage,filteredProds,filterProductsFunc} = useGetItem()

    const [input,setInput] = useState<string>()
    
    useEffect(() => {
        getItems();
    }, [items]);

    return (
        <ContainerStore>
            <ContainerSearch>
                <InputSearch placeholder="Pesquisar" onChange={(e)=> setInput(e.target.value)}></InputSearch>
                <ButtonSearch onClick={()=>{filterProductsFunc(input!)}}>
                    <IoSearchCircleOutline size={31.66}color="#D14B8F"/>
                </ButtonSearch>
            </ContainerSearch>    
           <FindProducts><strong>{totalItems}</strong> produtos encontrados</FindProducts>
            <DivItems>
                {filteredProds.length>0 && filteredProds.length !== 62?
                    filteredProds.map((item)=>
                        <ItemCards 
                            image={item.image} 
                            name={item.name} 
                            discount={item.discount} 
                            price={item.price} 
                            priceMember={item.priceMember} 
                            priceNonMember={item.priceNonMember}
                        />)
                :currentItems.map((item)=>
                    <>
                        <ItemCards 
                            image={item.image} 
                            name={item.name} 
                            discount={item.discount} 
                            price={item.price} 
                            priceMember={item.priceMember} 
                            priceNonMember={item.priceNonMember}
                        />
                        

                    </>
                    )}
            </DivItems>
            <ContainerPagination>
                {Array.from(Array(pages),(item,index)=>{
                   return(
                   <ButtonPagination value={index} onClick={(e) => setCurrentPage(Number(e.currentTarget.value))}>{index+1}</ButtonPagination>
                   )
                })}
            </ContainerPagination>
        </ContainerStore>
    )

}
export default Loja