import "../assets/css/cadProductView.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyHeader from "../components/MyHeader";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

function CadProductView() {

    // Para cadastrar um novo produto
    function handlerCadProd() {

    }

    return (
        <div>
            <MyHeader />
            <div id="divMainCadProduto"> 
                <h1>Cadastrar Produto</h1>
                <div id="divCadProduto">
                    <div>
                        <MyInput
                            type="text"
                            holder="Descrição"
                            inpId="inpProdDesc"
                            size="extraLarge"
                        />
                    </div>
                    <div className="rowCadProduto">
                        <div>
                            <MyInput
                                type="number"
                                holder="Preço"
                                inpId="inpProdPreco"
                                size="small"
                            />
                            <FontAwesomeIcon icon="fa-solid fa-images" id="icProdImg" />
                        </div>
                        <div id="divCadSizes">
                            <div className="divSize">
                                <h3>PP</h3>
                                <MyInput
                                    type="number"
                                    holder="PP"
                                    inpId="inpSize"
                                    size="micro"
                                />
                            </div>
                            <div className="divSize">
                                <h3>P</h3>
                                <MyInput
                                    type="number"
                                    holder="P"
                                    inpId="inpSize"
                                    size="micro"
                                />
                            </div>
                            <div className="divSize">
                                <h3>M</h3>
                                <MyInput
                                    type="number"
                                    holder="M"
                                    inpId="inpSize"
                                    size="micro"
                                />
                            </div>
                            <div className="divSize">
                                <h3>G</h3>
                                <MyInput
                                    type="number"
                                    holder="G"
                                    inpId="inpSize"
                                    size="micro"
                                />
                            </div>
                            <div className="divSize">
                                <h3>GG</h3>
                                <MyInput
                                    type="number"
                                    holder="GG"
                                    inpId="inpSize"
                                    size="micro"
                                />
                            </div>
                            <div className="divSize">
                                <h3>XGG</h3>
                                <MyInput
                                    type="number"
                                    holder="XGG"
                                    inpId="inpSize"
                                    size="micro"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <MyButton
                    text="Cadastrar Produto"
                    event={ handlerCadProd }
                />
            </div>
        </div>
    );
}

export default CadProductView;