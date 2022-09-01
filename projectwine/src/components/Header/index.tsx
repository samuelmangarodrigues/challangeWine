import { useHistory } from "react-router-dom"
import { ContainerHeader, ListItem, ListMenu } from "./styles"

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
        </ContainerHeader>
    )


}
export default Header