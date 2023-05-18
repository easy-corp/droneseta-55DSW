/* Contexto destinado aos produtos, as informacoes aqui colocadas
   podem ser acessadas a partir de diferentes pontos da nossa
   aplicação */

import { createContext, useContext, useState } from "react";
import axios from "axios";
import api from "./api";
 
export const ProductCtx = createContext();
export const useProductCtx = () => useContext(ProductCtx);

function ProductProvider({ children }) {    
    const [products, setProducts] = useState([]);                  // Produtos cadastrados
    const [product, setProduct] = useState([]);                    // Produto buscado
    const [cartProducts, setCartProducts] = useState([]);          // Produtos no carrinho de compras

    // Para recuperar os produtos
    async function getProducts() {
        axios.get(api + "/camisetas")
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.log(error);
        })        
    }

    // Para recupera um produto especifico
    async function getProduct(id) {
        axios.get(api + "/camisetas/" + id)
        .then(response => {
            setProduct(response.data);
        })
        .catch(error => {
            console.log(error);
        })   
    }

    // Para cadastrar um novo produto
    async function addProduct(product) {
        // Enviar produto pro backend
        axios.post(api + "/camisetas", product)
            .then(response => {
                // console.log(response);
            })
            .catch(error => {
                console.log(error);
            })    
    }

    // Para adicionar um produto no carrinho de compras
    // Ele é adicionado com quantidade e tamanho
    function addCartProduct(product, quantidade, tamanho) {
        var cartProduct = {...product, qtd: quantidade, sizeChoosed:tamanho };

        console.log(cartProduct);

        setCartProducts([...cartProducts, cartProduct]);
    }

    // Para aumentar a quantidade comprada daquele item
    // É necessário criar uma cópia do estado e modificá-la
    // Só depois podemos setar como lista atual
    function oneMoreCartProduct(index) {
        const auxProducts = [...cartProducts];
        
        auxProducts[index].qtd++;

        setCartProducts(auxProducts);
    }

    // Para diminuir a quantidade comprada daquele item
    // É necessário criar uma cópia do estado e modificá-la
    // Só depois podemos setar como lista atual
    function oneLessCartProduct(index) {
        const auxProducts = [...cartProducts];
        const prod = auxProducts[index];
        
        prod.qtd--;

        // Se chegar a 0 o produto é removido
        if (prod.qtd === 0) {
            auxProducts.splice(index, 1);
        }

        setCartProducts(auxProducts);
    }

    // Para recuperar o valor total dos produtos
    function getTotalCartProducts() {
        let value = 0;

        for (let prod of cartProducts) {
            value += prod.preco * prod.qtd;
        }

        return value;
    }

    // Para limpar o carrinho
    function clearCart() {
        setCartProducts([]);
    }

    // Para recuperar o valor de desconto
    function getDescProducts() {
        let value = 0;

        // Por enquanto está retornando 0

        return value;
    }

    // Para recuperar o valor de frete
    function getTotalFrete() {
        let value = 0;

        // Por enquanto está retornando 0

        return value;
    }

    // Para recuperar o valor final do pedido
    // O valor final é determinado pelo valor dos produtos + frete - desconto
    function getFinalValue() {
        let value = this.getTotalCartProducts() + this.getTotalFrete() - this.getDescProducts();

        return value;
    }

    return (
        <ProductCtx.Provider value={{ product, getProduct, products, getProducts, addProduct, cartProducts, addCartProduct, oneMoreCartProduct, oneLessCartProduct, getTotalCartProducts, clearCart, getDescProducts, getTotalFrete, getFinalValue }}>
            { children }
        </ProductCtx.Provider>
    );

}

export default ProductProvider;