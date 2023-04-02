import "../assets/css/homeView.css"
import topoHomeImg1 from "../assets/img/topoHomeImg1.png";
import topoHomeImg2 from "../assets/img/topoHomeImg2.png";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useProductCtx } from "../utils/products";

function HomeView() {
    const ctxProduct = useProductCtx();

    // Ao clicar para adicionar um produto no carrinho
    function addProductCart(index) {
        console.log("Botei o produto " + index + " no carrinho.");

        ctxProduct.addCartProduct(ctxProduct.products[index]);
    }

    return (
        <div>
            <MyHeader />
            { ctxProduct.cartProducts.length > 0 && <div id="cartItens"> { ctxProduct.cartProducts.length } </div> }
            <div id="divTopoHome">
                <div id="divInfoTopoHome">
                    <div>
                        <h1>Somos inovadores no que propomos fazer e queremos inovar ainda mais...</h1>
                        <p>
                        A DroneSeta se destaca apresentando um inédito sistema de entrega por drones. 
                        Levamos seu produto até você da maneira mais ágil possível, e garantimos a qualidade da entrega e de nossos incríveis produtos.
                        </p>
                    </div>
                    <div>
                        <img src={ topoHomeImg1 } alt="Imagem Topo Home" id="topoHomeImg1" className="imgTopoHome"></img>
                        <img src={ topoHomeImg2 } alt="Imagem Topo Home" id="topoHomeImg2" className="imgTopoHome"></img>
                    </div>
                </div>
            </div>
            <div id="divBackNossosProdutos">
                <div id="divNossosProdutos">
                    <h2 id="titleNossosProdutos">Nossos Produtos</h2>

                    <div id="divProdutos">
                        {ctxProduct.products.map((prod, index) => (
                            <div className="prodHome" key={index} >
                                <img src={ prod.image } alt="Imagem do Produto"></img>
                                <h3>{ prod.name }</h3>
                                <h2>R$ { prod.price }</h2>
                                <MyButton 
                                    text="Comprar"
                                    icon="fa-solid fa-cart-shopping"
                                    event={ addProductCart }
                                    eventVar={ index }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeView;