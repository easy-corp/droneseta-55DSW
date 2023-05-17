import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/loginView.css";
import logoLogin from "../assets/img/logoLogin.png";
import MyAlert from "../components/MyAlert";
import MyButtonIcon from "../components/MyButton";
import { useAuthCtx } from "../utils/auth";

function LoginView() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [login, setLogin] = useState(true);
    const navigate = useNavigate();

    // Recuperando o contexto
    const ctx = useAuthCtx();

    function userHandler(event) {
        setUser(event.target.value);
    }

    function passHandler(event) {
        setPass(event.target.value);
    }

    useEffect(() => {
        if (ctx.getAuth()) {
            if (ctx.getUserTipo() === "ADMIN") {
                console.log("admin");
                navigate("/panel");
            } else {
                console.log("não");
                navigate("/");
            }
        } else if (ctx.getAuth()) {
            setLogin(false);
        }
    }, [ctx.getAuth()]);

    async function doLogin() {
        await ctx.logar(user, pass);
    }

    return (
        <div id="app">
            {!login && <MyAlert text="Verifique as informações de login" tipo="erro" />}
            <div id="divLogin">
                <img src={logoLogin} alt="logoLogin" id="imgLogo" /> <br />
                <input type="text" placeholder="Usuário" id="inpLogin" value={user} onChange={userHandler} /><br />
                <input type="password" placeholder="Senha" id="inpPass" value={pass} onChange={passHandler} /><br />
                <MyButtonIcon
                    text="Entrar"
                    icon="fa-solid fa-door-open"
                    event={doLogin}
                /> <br />
                <span>Novo por aqui? <a href="/cadastro">Cadastre-se</a> </span>
            </div>
        </div>
    );
}

export default LoginView;