/* Contexto destinado aos produtos, as informações aqui colocadas
   podem ser acessadas a partir de diferentes pontos da nossa
   aplicação */

import { createContext, useContext, useState } from "react";
import camisetaSlipknot1 from "../assets/img/camisetas/Slipknot1.png";
import camisetaLinkinPark1 from "../assets/img/camisetas/LinkinPark1.jpeg";
 
export const ProductCtx = createContext();
export const useProductCtx = () => useContext(ProductCtx);

function ProductProvider({ children }) {    
    // Produtos iniciais
    const initProducts = [
        {
            name: "Camiseta Slipknot Os Nove Intregrantes em xadrez (formação 2017).",
            price: 54.99,
            size: "G",
            image: camisetaSlipknot1
        },
        {
            name: "Camiseta Linkin Park Meteora capa do álbum.",
            price: 54.99,
            size: "M",
            image: camisetaLinkinPark1
        },
        {
            name: "Camiseta Slipknot Os Nove Intregrantes em xadrez (formação 2017).",
            price: 54.99,
            size: "G",
            image: camisetaSlipknot1
        },
        {
            name: "Camiseta Linkin Park Meteora capa do álbum.",
            price: 54.99,
            size: "M",
            image: camisetaLinkinPark1
        },
        {
            name: "Camiseta Slipknot Os Nove Intregrantes em xadrez (formação 2017).",
            price: 54.99,
            size: "G",
            image: camisetaSlipknot1
        },
        {
            name: "Camiseta Linkin Park Meteora capa do álbum.",
            price: 54.99,
            size: "M",
            image: camisetaLinkinPark1
        },
        {
            name: "Camiseta Slipknot Os Nove Intregrantes em xadrez (formação 2017).",
            price: 54.99,
            size: "G",
            image: camisetaSlipknot1
        },
        {
            name: "Camiseta Linkin Park Meteora capa do álbum.",
            price: 54.99,
            size: "M",
            image: camisetaLinkinPark1
        },
    ];

    const [products, setProducts] = useState(initProducts);        // Produtos cadastrados
    const [cartProducts, setCartProducts] = useState([]);          // Produtos no carrinho de compras

    // Para cadastrar um novo produto
    function addProduct(product) {
        setProducts([...products, product]);
    }

    // Para adicionar um produto no carrinho de compras
    function addCartProduct(product) {
        setCartProducts([...cartProducts, product]);
    }


    return (
        <ProductCtx.Provider value={{ products, addProduct, cartProducts, addCartProduct }}>
            { children }
        </ProductCtx.Provider>
    );

}

export default ProductProvider;