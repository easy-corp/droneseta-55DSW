import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import "../assets/css/myHeader.css";
import logoHeader from "../assets/img/logoHeader.png";
import MySearchBar from "./MySearchBar";
import { useProductCtx } from '../utils/products';

function MyHeader() {
    const ctxProduct = useProductCtx();
    const navigate = useNavigate();

    function logoHandler() {
        navigate("/");
    }

    function icCartHandler() {
        navigate("/cart");
    }

    function icUserHandler() {
        navigate("/login");
    }

    return (
        <header className="divHeader">
            <div id="colImg" onClick={logoHandler}>
                <img src={ logoHeader } alt="Logo" className="imgLogo"></img>
            </div>
            <MySearchBar />
            <div id="colIcons">
                { ctxProduct.cartProducts.length > 0 && <div id="cartItens"> { ctxProduct.cartProducts.length } </div> }
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="IconHeader" onClick={icCartHandler} />
                <FontAwesomeIcon icon="fa-solid fa-user" className="IconHeader" onClick={icUserHandler} />
            </div>
            <div id="divHeaderBottom"></div>
        </header>
    );
}

export default MyHeader;