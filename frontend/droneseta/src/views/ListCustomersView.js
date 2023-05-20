import "../assets/css/listCustomersView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyHeader from "../components/MyHeader";
import { useEffect, useState } from "react";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { useAuthCtx } from "../utils/auth";

function ListCustomersView() {
    const [editMenu, setEditMenu] = useState(false);
    const [editId, setEditId] = useState(0);
    const [editNome, setEditNome] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editCard, setEditCard] = useState("");
    const [editUser, setEditUser] = useState("");
    
    const auth = useAuthCtx();

    useEffect(() => {
        auth.getUsers();
    }, [auth.users]);

    function handlerEditNome(event) {
        setEditNome(event.target.value);
    }

    function handlerEditEmail(event) {
        setEditEmail(event.target.value);
    }

    function handlerEditCard(event) {
        setEditCard(event.target.value);
    }

    // Para abrir o menu de edição
    function openEditMenu(user) {
        setEditMenu(true);

        setEditUser(user);
        
        // ID e Foto nao podem ser alterados
        setEditId(user.id);
        setEditNome(user.nome);
        setEditEmail(user.email);
        setEditCard(user.cartaoCredito);

        // Preenche os campos na tela com os dados atuais do produto
        // Apos pequeno atraso para garantir que o componente ja esteja na tela
        setTimeout(() => {
            let inpEditNome = document.getElementById("inpEditNome");
            let inpEditEmail = document.getElementById("inpEditEmail");
            let inpEditCard = document.getElementById("inpEditCard");

            inpEditNome.value = user.nome;
            inpEditEmail.value = user.email;
            inpEditCard.value = user.cartaoCredito;
        }, 10);        
    }

    // Para fechar o menu de edição
    function closeEditMenu() {
        setEditMenu(false);
    }

    // Para editar o produto
    function editProduct() {
        const user = {
            ...editUser,
            nome: editNome,
            email: editEmail,
            cartaoCredito: editCard,
            password: "",
            pedidos: [],
            enderecos: []
        }

        auth.updateUser(editId, user);

        // Atualiza os itens
        auth.getUsers();

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
                        holder="Nome"
                        inpId="inpEditNome"
                        size="large"
                        handler={ handlerEditNome }
                    />
                    <MyInput 
                        type="text"
                        holder="Email"
                        inpId="inpEditEmail"
                        size="large"
                        handler={ handlerEditEmail }
                    />
                    <MyInput 
                        type="text"
                        holder="Cartão de Credito"
                        inpId="inpEditCard"
                        size="large"
                        handler={ handlerEditCard }
                    />
                    <MyButton 
                        text="Alterar Cadastro"
                        event={ editProduct }
                    />
                </div>                
            </div>}
            <div id="listCustomersMain">
            { auth.users.map((user, index) => (
                <div className="listCustomers" key={index} >
                    <div className="listCustomerInfo">
                        <h3>{ user.nome }</h3>
                        <h4>{ user.tipo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</h4>
                        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" id="icEdit" onClick={ () => openEditMenu(user) } />
                    </div>
                </div>
            )) }
            </div>
        </div>
    );
}

export default ListCustomersView;