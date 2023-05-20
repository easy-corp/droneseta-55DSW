import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import "../assets/css/myHeader.css";
import logoHeader from "../assets/img/logoHeader.png";
import MySearchBar from "./MySearchBar";
import { useProductCtx } from '../utils/products';
import { useAuthCtx } from '../utils/auth';

function MyHeader() {
    const ctxProduct = useProductCtx();
    const auth = useAuthCtx();
    const navigate = useNavigate();

    function logoHandler() {
        navigate("/");
    }

    function icCartHandler() {
        navigate("/cart");
    }

    function icUserHandler() {
        // Limpa o carrinho e desloga o usuario
        ctxProduct.clearCart();
        auth.sair();
        
        navigate("/login");
    }

    function icHomeHandler() {
        navigate("/panel");
    }

    return (
        <header className="divHeader">
            <div id="colImg" onClick={logoHandler}>
                <img src={ logoHeader } alt="Logo" className="imgLogo"></img>
            </div>
            <MySearchBar />
            <div id="colIcons">
                { (ctxProduct.cartProducts.length > 0 && auth.getUserTipo() !== "ADMIN") && <div id="cartItens"> { ctxProduct.cartProducts.length } </div> }
                { auth.getUserTipo() !== "ADMIN" && <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="IconHeader" onClick={icCartHandler} /> }
                { auth.getUserTipo() === "ADMIN" && <FontAwesomeIcon icon="fa-solid fa-house" className="IconHeader" onClick={icHomeHandler} /> }
                <FontAwesomeIcon icon="fa-solid fa-user" className="IconHeader" onClick={icUserHandler} />
            </div>
            <div id="divHeaderBottom"></div>
        </header>
    );
}

export default MyHeader;