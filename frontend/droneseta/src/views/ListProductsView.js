import "../assets/css/listProductsView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductCtx } from "../utils/products";
import MyHeader from "../components/MyHeader";
import { useEffect, useState } from "react";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

function ListProductsView() {
    const [editMenu, setEditMenu] = useState(false);
    const [editId, setEditId] = useState(0);
    const [editDesc, setEditDesc] = useState("");
    const [editImg, setEditImg] = useState("");
    const [editValor, setEditValor] = useState("");
    const [editQtd, setEditQtd] = useState([]);
    
    const ctxProduct = useProductCtx();

    useEffect(() => {
        ctxProduct.getProducts();
    }, [ctxProduct.products]);

    function handlerEditDesc(event) {
        setEditDesc(event.target.value);
    }

    function handlerEditValor(event) {
        setEditValor(event.target.value);
    }

    function handlerEditQtd(event) {
        // Buscamos pelo tamanho em questão no array
        let tamanhoIndex = editQtd.findIndex((value) => value.tamanho === event.target.id);

        // Se esse tamanho nao estiver no array, adiciona ele
        // Caso contrario, devemos atualizar o array
        if (tamanhoIndex < 0) {
            setEditQtd(() => [...editQtd, { tamanho: event.target.id, qtd: event.target.value }]);
        } else {
            setEditQtd(() => [...editQtd.slice(0, tamanhoIndex), { tamanho: event.target.id, qtd: event.target.value }, ...editQtd.slice(tamanhoIndex + 1)]);
        }
    }


    // Para abrir o menu de edição
    function openEditMenu(produto) {
        setEditMenu(true);
        
        // ID e Foto nao podem ser alterados
        setEditId(produto.id);
        setEditImg(produto.foto);
        setEditDesc(produto.descricao);
        setEditValor(produto.preco);
        setEditQtd(produto.estoque);

        // Preenche os campos na tela com os dados atuais do produto
        // Apos pequeno atraso para garantir que o componente ja esteja na tela
        setTimeout(() => {
            let inpEditDesc = document.getElementById("inpEditDesc");
            let inpEditValor = document.getElementById("inpEditValor");

            inpEditDesc.value = produto.descricao;
            inpEditValor.value = produto.preco;

            produto.estoque.forEach(element => {
                let inpEditQtd = document.getElementById(element.tamanho);            

                inpEditQtd.value = ctxProduct.getProductSizeQtd(produto, element.tamanho);
            });
        }, 10);        
    }

    // Para fechar o menu de edição
    function closeEditMenu() {
        setEditMenu(false);
    }

    // Para editar o produto
    function editProduct() {
        const produto = {
            descricao: editDesc,
            foto: editImg,
            preco: editValor,
            tamanho: editQtd,
        }

        ctxProduct.updateProduto(editId, produto);

        // Atualiza os itens
        ctxProduct.getProducts();

        // Fecha a tela de edicao
        setEditMenu(false);
    }

    return(
        <div>
            <MyHeader />
            { editMenu && <div>
                <div id="divBackground"> </div>
                <div id="divEditMenu">
                    <FontAwesomeIcon icon="fa-solid fa-circle-xmark" id="icExit" onClick={ closeEditMenu } />
                    <MyInput 
                        type="text"
                        holder="Descrição"
                        inpId="inpEditDesc"
                        size="large"
                        handler={ handlerEditDesc }
                    />
                    <MyInput 
                        type="number"
                        holder="Valor"
                        inpId="inpEditValor"
                        size="small"
                        handler={ handlerEditValor }
                    />
                    <div>
                        <h3>PP</h3>
                        <MyInput
                            type="number"
                            holder="PP"
                            inpId="PP"
                            size="micro"
                            handler={ handlerEditQtd }
                        />
                    </div>
                    <div>
                        <h3>P</h3>
                        <MyInput
                            type="number"
                            holder="P"
                            inpId="P"
                            size="micro"
                            handler={ handlerEditQtd }
                        />
                    </div>
                    <div>
                        <h3>M</h3>
                        <MyInput
                            type="number"
                            holder="M"
                            inpId="M"
                            size="micro"
                            handler={ handlerEditQtd }
                        />
                    </div>
                    <div>
                        <h3>G</h3>
                        <MyInput
                            type="number"
                            holder="G"
                            inpId="G"
                            size="micro"
                            handler={ handlerEditQtd }
                        />
                    </div>
                    <div>
                        <h3>GG</h3>
                        <MyInput
                            type="number"
                            holder="GG"
                            inpId="GG"
                            size="micro"
                            handler={ handlerEditQtd }
                        />
                    </div>
                    <div>
                        <h3>XGG</h3>
                        <MyInput
                            type="number"
                            holder="XGG"
                            inpId="XGG"
                            size="micro"
                            handler={ handlerEditQtd }
                        />
                    </div>
                    <MyButton 
                        text="Alterar Cadastro"
                        event={ editProduct }
                    />
                </div>                
            </div>}
            <div id="listProductsMain">
            { ctxProduct.products.map((prod, index) => (
                <div className="listProducts" key={index} >
                    <img src={ prod.foto } alt="Imagem do Produto"></img>
                    <div className="listProdInfo">
                        <h3>{ prod.descricao }</h3>
                        <h3>{ prod.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</h3>
                        <h3>Peças em estoque: { ctxProduct.getProductQtd(prod) }</h3>
                        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" id="icEditProd" onClick={ () => openEditMenu(prod) } />
                    </div>
                </div>
            )) }
            </div>
        </div>
    );
}

export default ListProductsView;