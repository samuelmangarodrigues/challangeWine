import { ButtonItems, ContainerCardItem, ContainerDiscount, ContainerItem, ContainerPriceNoPartner, DiscountPrice, Img, NameItem, PricePartner, TotalPrice } from "./styles"


interface Iitems{
    image:string
    name:string
    price:number
    discount:number
    priceMember:number
    priceNonMember:number
}

const ItemCards = ({image,price,name,priceMember,priceNonMember,discount}:Iitems)=>{
    const diferencePrice = price - priceNonMember 
    const discountPorcent = Math.trunc((diferencePrice * 100) / price)
    return (
        <ContainerCardItem>
            <ContainerItem>
                <Img src={image} alt={name}></Img>
                <NameItem>{name}</NameItem>
                <ContainerDiscount>
                    <TotalPrice>R${price}</TotalPrice>
                    <DiscountPrice>{discountPorcent}% OFF</DiscountPrice>
                </ContainerDiscount>
                <ContainerDiscount>SÓCIO WINE
                    <PricePartner>
                        <span>R$</span>
                        {priceMember}
                        </PricePartner>
                </ContainerDiscount>
                <ContainerPriceNoPartner> NÃO SÓCIO  R${priceNonMember}</ContainerPriceNoPartner>
            </ContainerItem>
            <ButtonItems>ADICIONAR</ButtonItems>
        </ContainerCardItem>
    )
}
export default ItemCards