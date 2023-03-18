import "../assets/css/loginView.css";             
import logoLogin from "../assets/img/logoLogin.png";

function LoginView() {
    return (
        <div id="app">
            <div id="divLogin">
                <img src={logoLogin} alt="logoLogin" id="imgLogo" /> <br />
                <input type="text" placeholder="Usuário" id="inpLogin" /><br />
                <input type="text" placeholder="Senha" id="inpPass" /><br />
                <button className="btnPadrao" id="btnLogin">Entrar</button><br />
                <span>Novo por aqui? <a href="/cadastro">Cadastre-se</a> </span>
            </div>
        </div>
    );
}

export default LoginView;