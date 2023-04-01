import "../assets/css/homeView.css"
import topoHome from "../assets/img/topoHome.jpg"
import MyHeader from "../components/MyHeader";

function HomeView() {
    return (
        <div>
            <MyHeader />
            <img src={ topoHome } alt="TopoHome" id="imgTopHome"></img>
            <div id="divBackNossosProdutos">
                <div id="divNossosProdutos">
                    <h2>Nossos Produtos</h2>
                </div>
            </div>
        </div>
    );
}

export default HomeView;