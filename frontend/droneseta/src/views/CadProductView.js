import "../assets/css/cadProductView.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyHeader from "../components/MyHeader";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { useState } from "react";

function CadProductView() {
    // Os dados do formulario
    const [desc, setDesc] = useState("");
    const [value, setValue] = useState("");
    const [img, setImg] = useState("");
    const [qtd, setQtd] = useState([]);

    function descHandler(event) {
        setDesc(event.target.value);
    }

    function valueHandler(event) {
        setValue(event.target.value);
    }

    function imgHandler(event) {
        setImg(event.target.value);
    }

    function qtdHandler(event) {
        // Buscamos pelo tamanho em questão no array
        let tamanhoIndex = qtd.findIndex((value) => value.tamanho === event.target.id);

        // Se esse tamanho nao estiver no array, adiciona ele
        // Caso contrario, devemos atualizar o array
        if (tamanhoIndex < 0) {
            setQtd(() => [...qtd, { tamanho: event.target.id, qtd: event.target.value }]);
        } else {
            setQtd(() => [...qtd.slice(0, tamanhoIndex), { tamanho: event.target.id, qtd: event.target.value }, ...qtd.slice(tamanhoIndex + 1)]);
        }
    }

    // Para cadastrar um novo produto
    function handlerCadProd() {
        const produto = {
            name: desc,
            price: value,
            size: qtd,
            image: img
        }
        
        console.log(produto);
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
                            handler={descHandler}
                        />
                    </div>
                    <div className="rowCadProduto">
                        <div>
                            <MyInput
                                type="number"
                                holder="Preço"
                                inpId="inpProdPreco"
                                size="small"
                                handler={valueHandler}
                            />
                            <FontAwesomeIcon icon="fa-solid fa-images" id="icProdImg" />
                        </div>
                        <div id="divCadSizes">
                            <div className="divSize">
                                <h3>PP</h3>
                                <MyInput
                                    type="number"
                                    holder="PP"
                                    inpId="PP"
                                    size="micro"
                                    handler={qtdHandler}
                                />
                            </div>
                            <div className="divSize">
                                <h3>P</h3>
                                <MyInput
                                    type="number"
                                    holder="P"
                                    inpId="P"
                                    size="micro"
                                    handler={qtdHandler}
                                />
                            </div>
                            <div className="divSize">
                                <h3>M</h3>
                                <MyInput
                                    type="number"
                                    holder="M"
                                    inpId="M"
                                    size="micro"
                                    handler={qtdHandler}
                                />
                            </div>
                            <div className="divSize">
                                <h3>G</h3>
                                <MyInput
                                    type="number"
                                    holder="G"
                                    inpId="G"
                                    size="micro"
                                    handler={qtdHandler}
                                />
                            </div>
                            <div className="divSize">
                                <h3>GG</h3>
                                <MyInput
                                    type="number"
                                    holder="GG"
                                    inpId="GG"
                                    size="micro"
                                    handler={qtdHandler}
                                />
                            </div>
                            <div className="divSize">
                                <h3>XGG</h3>
                                <MyInput
                                    type="number"
                                    holder="XGG"
                                    inpId="XGG"
                                    size="micro"
                                    handler={qtdHandler}
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