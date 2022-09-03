import { useHistory } from "react-router-dom"
import { ButtonCart, ContainerHeader, ListItem, ListMenu } from "./styles"
import {BsPersonCircle} from "react-icons/bs"
import {CgShoppingCart} from "react-icons/cg"
const Header=()=>{

    const history= useHistory()
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
                <BsPersonCircle size={31.66} color="gray"/>
                <ButtonCart  onClick={()=>history.push("/cart")}>
                    <CgShoppingCart size={31.66}/>
                </ButtonCart>
            </div>
        </ContainerHeader>
    )


}
export default Header