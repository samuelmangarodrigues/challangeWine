import { ButtonItems, ContainerCardItem, ContainerItem, Img } from "./styles"


interface Iitems{
    image:string
    name:string
    price:number
    discount:number
    priceMember:number
    priceNonMember:number
}

const ItemCards = ({image,price,name,priceMember,priceNonMember,discount}:Iitems)=>{
    return (
        <ContainerCardItem>
            <ContainerItem>
                <Img src={image} alt={name}></Img>
                <div>{price}</div>
                <div>{name}</div>
                <div>{priceMember}</div>
                <div>{priceNonMember}</div>
                <div>{discount}</div>
            </ContainerItem>
            <ButtonItems>ADICIONAR</ButtonItems>
        </ContainerCardItem>
    )
}
export default ItemCards