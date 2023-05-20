import "../assets/css/registerView.css";
import MyHeader from "../components/MyHeader";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MyAlert from "../components/MyAlert";
import axios from "axios";
import api from "../utils/api";

function RegisterView() {
    // Os dados do formulario
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [date, setDate] = useState("");
    const [cpf, setCpf] = useState("");
    const [cartao, setCartao] = useState("");
    const [enderecoResid, setEnderecoResid] = useState("");
    const [enderecoCom, setEnderecoCom] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confPass, setConfPass] = useState("");
    const [erro, setErro] = useState(false);
    const [erroMsg, setErroMsg] = useState("");

    const navigate = useNavigate();

    function nameHandler(event) {
        setName(event.target.value);
    }
    
    function lastNameHandler(event) {
        setLastName(event.target.value);
    }

    function dateHandler(event) {
        setDate(event.target.value);
    }

    function cpfHandler(event) {
        setCpf(event.target.value);
    }

    function cardHandler(event) {
        setCartao(event.target.value);
    }
    
    function enderecoResidHandler(event) {
        setEnderecoResid(event.target.value);
    }

    function enderecoComHandler(event) {
        setEnderecoCom(event.target.value);
    }

    function emailHandler(event) {
        setEmail(event.target.value);
    }

    function loginHandler(event) {
        setLogin(event.target.value);
    }

    function passwordHandler(event) {
        setPassword(event.target.value);
    }

    function confPassHandler(event) {
        setConfPass(event.target.value);
    }

    // Esconder ou mostrar a senha
    function showSenha(event) {
        // Recupera o input relativo ao icon clicado
        var icon = event.target;
        var input = icon.parentNode.parentNode.childNodes[0];

        // Alterna o tipo do campo para permitir 
        // ou nao a exibicao do que esta escrito
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
    }

    // Realiza o cadastro do usuário
    async function cadastrarUsuario() {
        // Se os dados estiverem incompletos
        if (!name || !lastName || !date || !email || !cpf || !cartao || !login || !password || !enderecoResid || !enderecoCom) {
            setErro(true);
            setErroMsg("Preencha todos os dados para realizar o login");

            return;
        }

        // Se as senhas nao coincidirem
        if (password != confPass) {
            setErro(true);
            setErroMsg("As senhas não coincidem");

            return;
        }

        const usuario = {
            tipo: "USER",
            nome: name + " " + lastName,
            dataNascimento: new Date(date).toISOString(),
            email: email,
            cpf: cpf,
            cartaoCredito: cartao,
            username: login,
            password: password,
            enderecos: [
                { 
                    tipoEndereco: "RESIDENCIAL",
                    descricao: enderecoResid 
                },
                {
                    tipoEndereco: "COBRANCA",
                    descricao: enderecoCom   
                }
            ]
        }

        console.log(usuario);

        await axios.post(api + "/usuarios", usuario)
            .then(response => {
                // Retorna a tela de login
                navigate("/login");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return(
        <div>
            <MyHeader />
            {erro && <MyAlert text={ erroMsg } tipo="alerta" />}
            <div id="divMainRegister">
                <h1>Criar Conta</h1>
                <div id="divRegister">
                    <div className="rowInpRegister">
                        <MyInput 
                            type="text"
                            holder="Nome"
                            inpId="inpNome"
                            handler={ nameHandler }
                        />
                        <MyInput 
                            type="text"
                            holder="Sobrenome"
                            inpId="inpSobrenome"
                            handler={ lastNameHandler }
                        />
                    </div>
                    <div className="rowInpRegister">
                        <MyInput 
                            type="date"
                            holder="Data de Nascimento"
                            inpId="inpDtNasc"
                            size="small"
                            handler={ dateHandler }
                        />
                        <MyInput 
                            type="text"
                            holder="CPF"
                            inpId="inpCPF"
                            size="large"
                            handler={ cpfHandler }
                        />
                    </div>
                    <div className="rowInpRegister">
                        <MyInput 
                            type="text"
                            holder="Cartão de Crédito"
                            inpId="inpCartao"
                            size="large"
                            handler={ cardHandler }
                        />
                    </div>
                    <div className="rowInpRegister">
                        <MyInput 
                            type="text"
                            holder="Endereço Residencial"
                            size="extraLarge"
                            inpId="inpEnderecoResid"
                            handler={ enderecoResidHandler }
                        />
                    </div>
                    <div className="rowInpRegister">
                        <MyInput 
                            type="text"
                            holder="Endereço Comercial"
                            size="extraLarge"
                            inpId="inpEnderecoCom"
                            handler={ enderecoComHandler }
                        />
                    </div>
                    <div className="rowInpRegister">
                        <MyInput 
                            type="email"
                            holder="Email"
                            inpId="inpEmail"
                            size="large"
                            handler={ emailHandler }
                        />
                        <MyInput 
                            type="text"
                            holder="Login"
                            inpId="inpLogin"
                            size="small"
                            handler={ loginHandler }
                        />
                    </div>
                    <div className="rowInpRegister">
                        <MyInput 
                            type="password"
                            holder="Senha"
                            inpId="inpSenha"
                            icon="fa-eye-slash"
                            iconEvent={showSenha}
                            handler={ passwordHandler }
                        />
                        <MyInput 
                            type="password"
                            holder="Confirme a Senha"
                            inpId="inpConfSenha"
                            icon="fa-eye-slash"
                            iconEvent={showSenha}
                            handler={ confPassHandler }
                        />
                    </div>
                </div>
                < MyButton 
                    text="Realizar Cadastro"
                    event={cadastrarUsuario}
                />
            </div>
        </div>
    );
}

export default RegisterView;