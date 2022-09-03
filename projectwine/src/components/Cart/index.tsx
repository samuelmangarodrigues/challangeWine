import { ButtonItems, ContainerCardItem, ContainerDiscount, ContainerItem,Img, NameItem, TotalPrice } from "../ItemCards/styles"
import { ButtonCart, ContainerCartCards, ContainerInfoCart, ContainerMainCart } from "./styled"
import {BsFillTrashFill} from "react-icons/bs"
interface ICart{
    id:number
    image:string
    name:string
    price:number
    qnt:number
    handleClick:(id:number)=>void
}


const Cart=({id,image,name,price,qnt,handleClick}:ICart)=>{

return (
    <ContainerMainCart>
        <ContainerCartCards>
            <Img src={image} alt={name}></Img>
                <ContainerInfoCart>
                    <NameItem>{name}</NameItem>
                    <TotalPrice>R${price}</TotalPrice>
                    <span>{qnt}</span>
                    <ButtonCart onClick={()=>handleClick(id)}>
                        <BsFillTrashFill/>
                    </ButtonCart>
                </ContainerInfoCart>
    </ContainerCartCards>
</ContainerMainCart>
)
}
export default Cart