import "../assets/css/cadProductView.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyHeader from "../components/MyHeader";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { useState } from "react";
import { useProductCtx } from "../utils/products";

function CadProductView() {
    // Os dados do formulario
    const [desc, setDesc] = useState("");
    const [value, setValue] = useState("");
    const [img, setImg] = useState(null);
    const [qtd, setQtd] = useState([]);
    const ctxProduct = useProductCtx();

    function descHandler(event) {
        setDesc(event.target.value);
    }

    function valueHandler(event) {
        setValue(event.target.value);
    }

    function imgHandler(event) {
        if (event.target.files.length > 0 ) {
            let file = event.target.files[0];
            let fileReader = new FileReader();

            fileReader.onload = function (e) {
                setImg(e.target.result);
            }

            fileReader.readAsDataURL(file);
        }
    }

    function qtdHandler(event) {
        setQtd(() => [...qtd, { tamanho: event.target.id}]);
    }

    // Para cadastrar um novo produto
    function handlerCadProd() {
        const produto = {
            descricao: desc,
            preco: value,
            estoque: qtd,
            foto: img
        }
        
        ctxProduct.addProduct(produto);
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
                        <div className="colCadProduto">
                            <MyInput
                                type="number"
                                holder="Preço"
                                inpId="inpProdPreco"
                                size="small"
                                handler={valueHandler}
                            />
                            <div id="divProdImg">
                                { img && <img src={ img } alt="Imagem do Produto" id="prodImg" /> }
                                { !img && <FontAwesomeIcon icon="fa-solid fa-images" id="icProdImg" /> }
                                <input type="file" accept="image/**" onChange={ imgHandler } />
                            </div>
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