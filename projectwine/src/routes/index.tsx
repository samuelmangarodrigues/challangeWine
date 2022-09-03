import { Route, Switch } from "react-router-dom";
import Clube from "../pages/Clube";
import Eventos from "../pages/Eventos";
import Loja from "../pages/Loja";
import MyCart from "../pages/MyCart";
import Oferta from "../pages/Ofertas";
import Produtores from "../pages/Produtores";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Loja}/>
            <Route path="/clube" component={Clube}/>
            <Route path="/eventos" component={Eventos}/>
            <Route path="/oferta" component={Oferta}/>
            <Route path="/produtores" component={Produtores}/>
            <Route path="/cart" component={MyCart}/>
        </Switch>
    )
}
