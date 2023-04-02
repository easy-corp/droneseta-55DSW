import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/cartView.css";
import MyHeader from "../components/MyHeader";
import MyTitle from "../components/MyTitle";
import { useProductCtx } from "../utils/products";

function CartView() {
    const ctxProduct = useProductCtx();

    // Aumentar a quantidade daquele item
    function moreQtdProduct(index) {
        ctxProduct.oneMoreCartProduct(index);
    }

    // Diminuir a quantidade daquele item
    function lessQtdProduct(index) {
        ctxProduct.oneLessCartProduct(index);
    }

    return(
        <div>
            <MyHeader />
            <div id="divCart">
                <MyTitle
                    text="Produtos"
                    icon="fa-solid fa-box-open"
                />

                { ctxProduct.cartProducts.map((prod, index) => (
                    <div className="prodCart" key={ index } >
                        <div id="divProdInfo">
                            <img src={ prod.image } alt="Foto Camisa" ></img>
                            <div>
                                <h3>{ prod.name }</h3>
                                <h4>Tamanho: { prod.size }</h4>
                            </div>
                        </div>
                        <div id="divProdQtd">
                            <h3>Quantidade</h3>
                            <div id="divAdjustQtd">
                                <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="icAdjustQtd" onClick={ () => lessQtdProduct(index) } />
                                <h3>{ prod.qtd }</h3>
                                <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="icAdjustQtd" onClick={ () => moreQtdProduct(index) } />
                            </div>
                        </div>
                        <div id="divProdValor">
                            <h3>Valor</h3>
                            <h3 id="hValor">R$ { prod.price }</h3>
                        </div>
                    </div>
                )) }
            </div>
        </div>

    );
}

export default CartView;