import { useCart } from "../../contexts/CartContext"
import Cart from "../../components/Cart"
import { ContainerEmptyCart, EmptyCart } from "./styles"
import {FcEmptyTrash} from "react-icons/fc"

const MyCart = () => {

    const {cart,deleteCart} = useCart()

    return(
        <div>
            {cart.length===0?
            <ContainerEmptyCart>
                <EmptyCart>Seu carrinho está vazio!</EmptyCart>
                <FcEmptyTrash size={300}/>
            </ContainerEmptyCart> 
            :
            cart.map((c)=>
                <Cart
                    id={c.id}
                    name={c.name}
                    price={c.price}
                    image={c.image}
                    qnt={c.qnt}
                    key={c.id}
                    handleClick={()=>deleteCart(c.id)}
                />)}
        </div>
    )
    
}
export default MyCart