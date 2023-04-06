import "../assets/css/registerView.css";
import MyHeader from "../components/MyHeader";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";

function RegisterView() {
    const navigate = useNavigate();

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
    function cadastrarUsuario() {
        // Por enquanto está só redirecionando o usuario de volta ao login
        navigate("/login");
    }

    return(
        <div>
            <MyHeader />
            <div id="divMainRegister">
                <h1>Criar Conta</h1>
                <div id="divRegister">
                    <div className="rowInpRegister">
                        <MyInput 
                            type="text"
                            holder="Nome"
                            inpId="inpNome"
                        />
                        <MyInput 
                            type="text"
                            holder="Sobrenome"
                            inpId="inpSobrenome"
                        />
                    </div>
                    <div className="rowInpRegister">
                        <MyInput 
                            type="date"
                            holder="Data de Nascimento"
                            inpId="inpDtNasc"
                            size="small"
                        />
                        <MyInput 
                            type="text"
                            holder="CPF"
                            inpId="inpCPF"
                            size="large"
                        />
                    </div>
                    <div className="rowInpRegister">
                        <MyInput 
                            type="email"
                            holder="Email"
                            inpId="inpEmail"
                            size="large"
                        />
                        <MyInput 
                            type="text"
                            holder="Login"
                            inpId="inpLogin"
                            size="small"
                        />
                    </div>
                    <div className="rowInpRegister">
                        <MyInput 
                            type="password"
                            holder="Senha"
                            inpId="inpSenha"
                            icon="fa-eye-slash"
                            iconEvent={showSenha}
                        />
                        <MyInput 
                            type="password"
                            holder="Confirme a Senha"
                            inpId="inpConfSenha"
                            icon="fa-eye-slash"
                            iconEvent={showSenha}
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