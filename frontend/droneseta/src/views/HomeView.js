import "../assets/css/homeView.css"
import topoHomeImg1 from "../assets/img/topoHomeImg1.png";
import topoHomeImg2 from "../assets/img/topoHomeImg2.png";
import camisetaSlipknot1 from "../assets/img/camisetas/Slipknot1.png";
import camisetaLinkinPark1 from "../assets/img/camisetas/LinkinPark1.jpeg";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

function HomeView() {
    const products = [
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
    ]

    // Ao clicar para adicionar um produto no carrinho
    function addProductCart(index) {
        console.log("Botei o produto " + index + " no carrinho.");
    }

    return (
        <div>
            <MyHeader />
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
                        {products.map((prod, index) => (
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