import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/productView.css";
import { useProductCtx } from "../utils/products";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useState } from "react";
import MySelect from "../components/MySizeSelect";

function ProductView() {
    // A quantidade de itens que serão colocados no carrinho
    const [ qtd, setQtd ] = useState(0);
    const ctxProduct = useProductCtx();

    // O produto vem via parametro na rota
    const { indexProduct } = useParams();
    const produto = ctxProduct.products[indexProduct];

    // Ao clicar para adicionar um produto no carrinho
    // Precisamos indicar o produto, tamanho e quantidade
    function addProductCart() {
        var selSize = document.getElementById("selSize");
        var selValue = selSize.options[selSize.selectedIndex].value;

        ctxProduct.addCartProduct(ctxProduct.products[indexProduct], qtd, selValue);
    }

    return(
        <div>
            <MyHeader />
            <div id="divProdutoView">
                <img src={ produto.image } alt="Imagem do Produto"></img>
                <div id="divProdutoViewInfos">
                    <h1 id="ProdutoViewNome">{ produto.name }</h1>
                    <h1 id="ProdutoViewPreco">R$ { produto.price }</h1>
                    <div id="divProdutoComprar">
                        <div id="divProdutoViewSize">
                            <h3>Tamanho</h3>
                            <MySelect 
                                selId="selSize"
                                options={ produto.size }
                            />
                        </div>
                        <div id="divProdutoViewQtd">
                            <h3>Quantidade</h3>
                            <div id="divProdutoAdjustQtd">
                                <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="icAdjustQtd" onClick={ () => setQtd(qtd - 1) } />
                                <h3>{ qtd }</h3>
                                <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="icAdjustQtd" onClick={ () => setQtd(qtd + 1) } />
                            </div>
                        </div>                    
                    </div>
                    <MyButton 
                        text="Comprar"
                        icon="fa-solid fa-cart-shopping"
                        event={ addProductCart }
                    />  
                </div>
            </div>
        </div>
    );
}

export default ProductView;