import {ContainerPriceNoPartner,Img, NameItem, PricePartner, TotalPrice } from "../ItemCards/styles"
import { ButtonAddAndSub, ButtonCart, ContainerAddAndSubCart, ContainerCartCards, ContainerInfoCart, ContainerMainCart } from "./styled"
import {BsFillTrashFill} from "react-icons/bs"
interface ICart{
    id:number
    image:string
    name:string
    price:number
    qnt:number
    priceMember:number
    priceNonMember:number
    country:string
    volume:string
    classification:string
    handleClick:(id:number)=>void
    handleClickAdd:(id:number)=>void
    handleClickSub:(id:number)=>void
}


const Cart=({id,image,name,price,qnt,priceMember,priceNonMember,country,handleClick,handleClickAdd,handleClickSub,volume,classification}:ICart)=>{

return (
    <ContainerMainCart>
        <ContainerCartCards>
            
            <Img src={image} alt={name}></Img>
                <ContainerInfoCart>
                    <NameItem>{name}</NameItem>
                    <ContainerPriceNoPartner>R$ {priceNonMember.toFixed(2)}</ContainerPriceNoPartner>
                    <span>{country}</span>
                    <span>{volume}</span>
                    <span>{classification}</span>
                    <ContainerAddAndSubCart>
                        <ButtonAddAndSub onClick={()=>handleClickAdd(id)}>+</ButtonAddAndSub>
                        <span>{qnt}</span>
                        <ButtonAddAndSub onClick={()=>handleClickSub(id)}>-</ButtonAddAndSub>
                    </ContainerAddAndSubCart>
                </ContainerInfoCart>
                    <ButtonCart onClick={()=>handleClick(id)}>
                        <BsFillTrashFill size={20}/>
                    </ButtonCart>
    </ContainerCartCards>
</ContainerMainCart>
)
}
export default Cart