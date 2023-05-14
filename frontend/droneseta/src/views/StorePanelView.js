import "../assets/css/storePanelView.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import { useNavigate } from "react-router-dom";

function StorePanelView() {
    const navigate = useNavigate();

    // Para cadastrar um novo produto
    function handlerCadProd() {
        navigate("/cadProduct");
    }

    // Para consultar produtos
    function handlerConsProd() {
        navigate("/listProducts");
    }

    // Para abrir os relatórios
    function handlerOpenRel() {

    }

    return(
        <div>
            <MyHeader />
            <div id="divMainPanel">                
                <h1>Controle Gerencial</h1>
                <div id="divMenus">
                    <div className="menuControle">
                        <FontAwesomeIcon icon="fa-solid fa-shirt" className="icMenu" />
                        <h2>Produtos</h2>
                        <MyButton 
                            text="Cadastrar Produtos"
                            event={ handlerCadProd }
                        />
                        <MyButton 
                            text="Consultar Produtos"
                            event={ handlerConsProd }
                        />
                    </div>
                    <div className="menuControle">
                        <FontAwesomeIcon icon="fa-solid fa-chart-pie" className="icMenu" />
                        <h2>Relatórios</h2>
                        <MyButton 
                            text="Clientes Cadastrados"
                            event={ handlerOpenRel }
                        />
                        <MyButton 
                            text="Mais Vendidos"
                            event={ handlerOpenRel }
                        />
                        <MyButton 
                            text="Pedidos Pendentes"
                            event={ handlerOpenRel }
                        />
                        <MyButton 
                            text="Pedidos Finalizados"
                            event={ handlerOpenRel }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StorePanelView;