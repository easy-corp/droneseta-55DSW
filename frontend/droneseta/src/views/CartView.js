import "../assets/css/cartView.css";
import MyHeader from "../components/MyHeader";
import MyTitle from "../components/MyTitle";

function CartView() {
    return(
        <div>
            <MyHeader />
            <div id="divProductsCart">
                <MyTitle
                    text="Produtos"
                    icon="fa-solid fa-box-open"
                />
            </div>
        </div>

    );
}

export default CartView;