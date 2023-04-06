/* Contexto destinado aos produtos, as informações aqui colocadas
   podem ser acessadas a partir de diferentes pontos da nossa
   aplicação */

import { createContext, useContext, useState } from "react";
import camisetaSlipknot1 from "../assets/img/camisetas/Slipknot1.png";
import camisetaLinkinPark1 from "../assets/img/camisetas/LinkinPark1.jpeg";
 
export const ProductCtx = createContext();
export const useProductCtx = () => useContext(ProductCtx);

function ProductProvider({ children }) {    
    // Para gerar os produtos iniciais
    function initProducts() {
        return [
            {
                name: "Camiseta Slipknot Os Nove Intregrantes em xadrez (formação 2017).",
                price: 54.99,
                size: [
                    {tamanho: "PP", qtd: 1},
                    {tamanho: "P", qtd: 1},
                    {tamanho: "M", qtd: 1},
                    {tamanho: "G", qtd: 1},
                    {tamanho: "GG", qtd: 1},
                    {tamanho: "XGG", qtd: 1},
                ],
                image: camisetaSlipknot1
            },
            {
                name: "Camiseta Linkin Park Meteora capa do álbum.",
                price: 54.99,
                size: [
                    {tamanho: "PP", qtd: 1},
                    {tamanho: "P", qtd: 1},
                    {tamanho: "M", qtd: 1},
                    {tamanho: "G", qtd: 1},
                    {tamanho: "GG", qtd: 1},
                    {tamanho: "XGG", qtd: 1},
                ],
                image: camisetaLinkinPark1
            },
            {
                name: "Camiseta Slipknot Os Nove Intregrantes em xadrez (formação 2017).",
                price: 54.99,
                size: [
                    {tamanho: "PP", qtd: 1},
                    {tamanho: "P", qtd: 1},
                    {tamanho: "M", qtd: 1},
                    {tamanho: "G", qtd: 1},
                    {tamanho: "GG", qtd: 1},
                    {tamanho: "XGG", qtd: 1},
                ],
                image: camisetaSlipknot1
            },
            {
                name: "Camiseta Linkin Park Meteora capa do álbum.",
                price: 54.99,
                size: [
                    {tamanho: "PP", qtd: 1},
                    {tamanho: "P", qtd: 1},
                    {tamanho: "M", qtd: 1},
                    {tamanho: "G", qtd: 1},
                    {tamanho: "GG", qtd: 1},
                    {tamanho: "XGG", qtd: 1},
                ],
                image: camisetaLinkinPark1
            },
            {
                name: "Camiseta Slipknot Os Nove Intregrantes em xadrez (formação 2017).",
                price: 54.99,
                size: [
                    {tamanho: "PP", qtd: 1},
                    {tamanho: "P", qtd: 1},
                    {tamanho: "M", qtd: 1},
                    {tamanho: "G", qtd: 1},
                    {tamanho: "GG", qtd: 1},
                    {tamanho: "XGG", qtd: 1},
                ],
                image: camisetaSlipknot1
            },
            {
                name: "Camiseta Linkin Park Meteora capa do álbum.",
                price: 54.99,
                size: [
                    {tamanho: "PP", qtd: 1},
                    {tamanho: "P", qtd: 1},
                    {tamanho: "M", qtd: 1},
                    {tamanho: "G", qtd: 1},
                    {tamanho: "GG", qtd: 1},
                    {tamanho: "XGG", qtd: 1},
                ],
                image: camisetaLinkinPark1
            },
            {
                name: "Camiseta Slipknot Os Nove Intregrantes em xadrez (formação 2017).",
                price: 54.99,
                size: [
                    {tamanho: "PP", qtd: 1},
                    {tamanho: "P", qtd: 1},
                    {tamanho: "M", qtd: 1},
                    {tamanho: "G", qtd: 1},
                    {tamanho: "GG", qtd: 1},
                    {tamanho: "XGG", qtd: 1},
                ],
                image: camisetaSlipknot1
            },
            {
                name: "Camiseta Linkin Park Meteora capa do álbum.",
                price: 54.99,
                size: [
                    {tamanho: "PP", qtd: 1},
                    {tamanho: "P", qtd: 1},
                    {tamanho: "M", qtd: 1},
                    {tamanho: "G", qtd: 1},
                    {tamanho: "GG", qtd: 1},
                    {tamanho: "XGG", qtd: 1},
                ],
                image: camisetaLinkinPark1
            },
        ];
    }

    const [products, setProducts] = useState(initProducts());      // Produtos cadastrados
    const [cartProducts, setCartProducts] = useState([]);          // Produtos no carrinho de compras

    // Para cadastrar um novo produto
    function addProduct(product) {
        setProducts([...products, product]);
    }

    // Para adicionar um produto no carrinho de compras
    // Ele é adicionado com quantidade e tamanho
    function addCartProduct(product, quantidade, tamanho) {
        var cartProduct = {...product, qtd: quantidade, sizeChoosed:tamanho };

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
            value += prod.price * prod.qtd;
        }

        return value;
    }

    return (
        <ProductCtx.Provider value={{ products, addProduct, cartProducts, addCartProduct, oneMoreCartProduct, oneLessCartProduct, getTotalCartProducts }}>
            { children }
        </ProductCtx.Provider>
    );

}

export default ProductProvider;