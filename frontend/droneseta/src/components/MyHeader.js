import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import "../assets/css/myHeader.css";
import logoHeader from "../assets/img/logoHeader.png";
import MySearchBar from "./MySearchBar";

function MyHeader() {
    const navigate = useNavigate();

    function icCartHandler() {
        navigate("/cart");
    }

    function icUserHandler() {
        navigate("/login");
    }

    return (
        <header className="divHeader">
            <div id="colImg">
                <a href="/home"><img src={ logoHeader } alt="Logo" className="imgLogo"></img></a>
            </div>
            <MySearchBar />
            <div id="colIcons">
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="IconHeader" onClick={icCartHandler} />
                <FontAwesomeIcon icon="fa-solid fa-user" className="IconHeader" onClick={icUserHandler} />
            </div>
        </header>
    );
}

export default MyHeader;