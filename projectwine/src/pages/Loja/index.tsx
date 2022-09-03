import { useEffect} from "react"
import ItemCards from "../../components/ItemCards"
import { useItem } from "../../contexts/ItemContext"
import { ButtonPagination, ButtonSearch, ContainerPagination, ContainerSearch, ContainerStore, DivItems, FindProducts, InputSearch } from "./styled"
import {useState} from "react"
import { IoSearchCircleOutline } from "react-icons/io5"
import { useCart } from "../../contexts/CartContext"
import {ToastContainer}from "react-toastify"
const Loja = () => {


    const{items,getItems,totalItems,currentItems,pages,setCurrentPage,filteredProds,filterProductsFunc} = useItem()
    const {addCart} = useCart()

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
            <ToastContainer/>
            <DivItems>
                {filteredProds.length>0 && filteredProds.length !== 62?
                    filteredProds.map((item)=>
                        <ItemCards 
                            id={item.id}
                            image={item.image} 
                            name={item.name} 
                            discount={item.discount} 
                            price={item.price} 
                            priceMember={item.priceMember} 
                            priceNonMember={item.priceNonMember}
                            handleFunc={()=> addCart(item.id)}
                        />)
                :currentItems.map((item)=>
                    <>
                        <ItemCards 
                            id={item.id}
                            image={item.image} 
                            name={item.name} 
                            discount={item.discount} 
                            price={item.price} 
                            priceMember={item.priceMember} 
                            priceNonMember={item.priceNonMember}
                            handleFunc={()=> addCart(item.id)}
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