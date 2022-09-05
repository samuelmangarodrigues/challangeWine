import { useHistory } from "react-router-dom"
import { ButtonCart, CartLenghtItems, ContainerHeader, LinkPortfolio, ListItem, ListMenu } from "./styles"
import {BsPersonCircle} from "react-icons/bs"
import {CgShoppingCart} from "react-icons/cg"
import { useCart } from "../../contexts/CartContext"
import { IoWine } from "react-icons/io5"
const Header=()=>{

    const history= useHistory()
    const {cart} = useCart()
    return (
        <ContainerHeader>
            <img  src="https://img.wine.com.br/logo/wine/black/wine.svg" alt="wineLogo"></img>
            <ListMenu>
                <ListItem id="removeItems">Clube</ListItem>
                <ListItem id="removeItems" onClick={()=> history.push("/")}>Loja</ListItem>
                <ListItem onClick={()=>history.push("/")} id="iconWine"><IoWine  size={31.66}/></ListItem>
                <ListItem id="removeItems">Produtores</ListItem>
                <ListItem id="removeItems">Ofertas</ListItem>
                <ListItem id="removeItems">Eventos</ListItem>
            </ListMenu>
            <div>
                <LinkPortfolio href="https://samuelmanga-portfolio.vercel.app/" target="_blank" rel="noreferrer">
                    <BsPersonCircle size={31.66}/>
                </LinkPortfolio>
                <ButtonCart  onClick={()=>history.push("/cart")}>
                    <CgShoppingCart size={31.66}/>
                    {cart.length===0?false:<CartLenghtItems>{cart.length}</CartLenghtItems>}
                </ButtonCart>
            </div>
        </ContainerHeader>
    )


}
export default Header