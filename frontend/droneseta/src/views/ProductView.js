import "../assets/css/productView.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductCtx } from "../utils/products";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useEffect, useState } from "react";
import MySelect from "../components/MySizeSelect";

function ProductView() {
    // A quantidade de itens que serão colocados no carrinho
    const [ qtd, setQtd ] = useState(0);
    const ctxProduct = useProductCtx();

    // O produto vem via parametro na rota
    const { indexProduct } = useParams();

    useEffect(() => {
        ctxProduct.getProduct(indexProduct);
    }, []);

    // Ao clicar para adicionar um produto no carrinho
    // Precisamos indicar o produto, tamanho e quantidade
    function addProductCart() {
        var selSize = document.getElementById("selSize");
        var selValue = selSize.options[selSize.selectedIndex].value;

        ctxProduct.addCartProduct(ctxProduct.product, qtd, selValue);
    }

    // Para exibir somente os tamanhos disponiveis
    function verificarEstoquePositivo() {
        let tamanhos = [];

        for (let i = 0; i < ctxProduct.product.estoque.length; i++) {
            let tam = ctxProduct.product.estoque[i];

            if (!tamanhos.includes(tam.tamanho)) {
                tamanhos.push(tam.tamanho);
            }
        }

        console.log(tamanhos);

        return tamanhos;
    }

    return(
        <div>
            <MyHeader />
            { ctxProduct.product.id && <div id="divProdutoView">
                <img src={ ctxProduct.product.foto } alt="Imagem do Produto"></img>
                <div id="divProdutoViewInfos">
                    <h1 id="ProdutoViewNome">{ ctxProduct.product.descricao }</h1>
                    <h1 id="ProdutoViewPreco">{ ctxProduct.product.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</h1>
                    { ctxProduct.getProductQtd(ctxProduct.product) <= 0 && <h2>Produto sem estoque no momento</h2> }
                    { ctxProduct.getProductQtd(ctxProduct.product) > 0 && <div id="divProdutoComprar">
                        <div id="divProdutoViewSize">
                            <h3>Tamanho</h3>
                            <MySelect 
                                selId="selSize"
                                options={ verificarEstoquePositivo() }
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
                    </div> }
                    { ctxProduct.getProductQtd(ctxProduct.product) > 0 && <MyButton 
                        text="Comprar"
                        icon="fa-solid fa-cart-shopping"
                        event={ addProductCart }
                    /> }
                </div>
            </div> }
        </div>
    );
}

export default ProductView;