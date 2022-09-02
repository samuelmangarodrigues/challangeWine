import { useHistory } from "react-router-dom"
import { ContainerHeader, ListItem, ListMenu } from "./styles"
import {IoSearchCircleOutline} from "react-icons/io5"
import {BsPersonCircle} from "react-icons/bs"
import { useState } from "react"
import { useGetItem } from "../../contexts/ItemContext"
const Header=()=>{

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


    const history= useHistory()
    const [input,setInput]=useState<string>()
    const {filterProductsFunc,filteredProds} = useGetItem()

    return (
        <ContainerHeader>
            <img  src="https://img.wine.com.br/logo/wine/black/wine.svg" alt="wineLogo"></img>
            <ListMenu>
                <ListItem onClick={()=>history.push("clube")}>Clube</ListItem>
                <ListItem onClick={()=> history.push("/")}>Loja</ListItem>
                <ListItem onClick={()=> history.push("produtores")}>Produtores</ListItem>
                <ListItem onClick={()=> history.push("oferta")}>Ofertas</ListItem>
                <ListItem onClick={()=> history.push("eventos")}>Eventos</ListItem>
            </ListMenu>
            <div>
                <button onClick={()=>{filterProductsFunc(input!)}}>
                    <IoSearchCircleOutline size={31.66}color="gray"/>
                </button>
                {filteredProds.map((p)=>p.name)}
                <BsPersonCircle size={31.66} color="gray"/>
                <input onChange={(e)=> setInput(e.target.value)}></input>
            </div>
        </ContainerHeader>
    )


}
export default Header