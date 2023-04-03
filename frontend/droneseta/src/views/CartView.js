import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/cartView.css";
import { useProductCtx } from "../utils/products";
import MyHeader from "../components/MyHeader";
import MyTitle from "../components/MyTitle";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";

function CartView() {
    const ctxProduct = useProductCtx();
    const navigate = useNavigate();
    var displayRecadoEntrega = false;

    // Aumentar a quantidade daquele item
    function moreQtdProduct(index) {
        ctxProduct.oneMoreCartProduct(index);
    }

    // Diminuir a quantidade daquele item
    function lessQtdProduct(index) {
        ctxProduct.oneLessCartProduct(index);
    }

    // Para aplicar cupom
    function handlerCupom() {
        console.log("Você tentou aplicar um cupom");
    }

    // Para calcular o CEP
    function handlerCEP() {
        console.log("Você tentou calcular o CEP");
    }

    // Para exibir info sobre o frete ao pressionar o icone no input
    function showInfoFrete() {
        var divRecadoEntrega = document.getElementById("divRecadoEntrega");

        if (displayRecadoEntrega) {
            divRecadoEntrega.style.display = "none";
        } else {
            divRecadoEntrega.style.display = "inline";
        }

        displayRecadoEntrega = !displayRecadoEntrega;
    }

    // Para continuar a adicionar itens no carrinho
    function continuarCompra() {
        navigate("/");
    }

    // Para finalizar a compra
    function finalizarCompra() {
        navigate("/payment");
    }

    return(
        <div>
            <MyHeader />
            <div id="divCart">
                <MyTitle
                    text="Produtos"
                    icon="fa-solid fa-box-open"
                />
                { ctxProduct.cartProducts.length == 0 && <h2>Ainda não há produtos no seu carrinho de compras</h2> }
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
                            <h3 id="hValor">R$ { (prod.price * prod.qtd) }</h3>
                        </div>
                    </div>
                )) }
                <div id="divCartTotal">
                    <h2>Subtotal</h2>
                    <h2 id="hTotal">R$ { ctxProduct.getTotalCartProducts() }</h2>
                </div>
                <div className="divLine lineMaior"></div>
                <div id="divFinalCart">
                    <div id="colCupomFrete">
                        <MyTitle
                            text="Cupom de Desconto"
                            icon="fa-solid fa-ticket"
                        />
                        <div className="rowCupomFrete">
                            <MyInput 
                                holder="Insira o cupom"
                            />
                            <MyButton 
                                text="Aplicar Cupom"
                                event={ handlerCupom }
                            />
                        </div>
                        <div className="divLine lineMenor"></div>
                        <MyTitle
                            text="Frete"
                            icon="fa-solid fa-paper-plane"
                        />
                        <div className="rowCupomFrete">
                            <div id="divRecadoEntrega">
                                <p>
                                Somos inovadores na entrega por drones,
                                seus pedidos serão entregues muito
                                rapidamente, mediante disponibilidade.
                                </p>
                                <div id="divTrianguloRecadoEntrega">

                                </div>
                            </div>
                            <MyInput 
                                holder="Insira seu CEP"
                                icon="fa-solid fa-circle-info"
                                iconEvent={ showInfoFrete }
                            />
                            <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank"><h4>Como descobrir meu CEP?</h4></a>
                            <MyButton 
                                text="Buscar CEP"
                                event={ handlerCEP }
                            />
                        </div>
                    </div>
                    <div id="colFinalCart">
                        <div id="divTotalCart">
                            <h1>Total: <strong>R$ { ctxProduct.getTotalCartProducts() }</strong></h1>
                            <MyButton 
                                text="Continuar Compra"
                                event={ continuarCompra }
                            />
                            <MyButton 
                                text="Finalizar Compra"
                                event={ finalizarCompra }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CartView;