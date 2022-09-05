import { useCart } from '../../contexts/CartContext';
import Cart from '../../components/Cart';
import {
  ButtonFinalyBuy,
  ContainerEmptyCart,
  ContainerTotalPriceButton,
  EmptyCart,
  TotalPrice,
} from './styles';
import { FcEmptyTrash } from 'react-icons/fc';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
const MyCart = () => {
  const {
    cart,
    deleteCart,
    addQntCart,
    subQntCart,
    totalValue,
    finalizePurchase,
  } = useCart();

  return (
    <>
      {cart.length === 0 ? (
        <ContainerEmptyCart>
          <EmptyCart>Sua Wine Box está vazia ):</EmptyCart>
          <span>
            Dê uma olhada em nossos <Link to="/">produtos</Link> :)
          </span>
          <FcEmptyTrash size={300} />
          <ToastContainer />
        </ContainerEmptyCart>
      ) : (
        cart.map((c) => (
          <Cart
            id={c.id}
            name={c.name}
            price={c.price}
            image={c.image}
            qnt={c.qnt}
            priceMember={c.priceMember}
            priceNonMember={c.priceNonMember}
            country={c.country}
            classification={c.classification}
            volume={c.volume}
            key={c.id}
            handleClick={() => deleteCart(c.id)}
            handleClickAdd={() => addQntCart(c.id)}
            handleClickSub={() => subQntCart(c.id)}
          />
        ))
      )}
      <ContainerTotalPriceButton>
        <TotalPrice> Total à pagar R$ {totalValue.toFixed(2)}</TotalPrice>
        {cart.length === 0 ? (
          false
        ) : (
          <ButtonFinalyBuy onClick={() => finalizePurchase()}>
            Finalizar compra
          </ButtonFinalyBuy>
        )}
      </ContainerTotalPriceButton>
    </>
  );
};
export default MyCart;
