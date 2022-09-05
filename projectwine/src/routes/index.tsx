import { Route, Switch } from "react-router-dom";
import Loja from "../pages/Loja";
import MyCart from "../pages/MyCart";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Loja}/>
            <Route path="/cart" component={MyCart}/>
        </Switch>
    )
}
