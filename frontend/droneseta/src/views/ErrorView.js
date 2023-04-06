import "../assets/css/errorView.css"
import MyHeader from "../components/MyHeader";
import imgNotFound from "../assets/img/notFound.png";

function ErrorView() {
    return (
        <div>
            <MyHeader />
            <div id="div404">
                <div id="divImg404">
                    <img src={ imgNotFound } alt="Imagem 404"></img>
                    <h1>Desculpe, não encontramos a página que você está procurando...</h1>
                </div>
                <p>
                    O conteúdo que você está tentando acessar não está disponível nesse
                    endereço. Verifique se o endereço informado está correto e tente novamente.
                </p>
                <br/>
                <p>
                    Se você tiver uma máquina do tempo seu problema pode ser resolvido de 
                    maneira rápida. Se esse for o caso, nos avise, por favor, estamos 
                    interessados nesse assunto. 
                </p>
            </div>
        </div>
    );
}

export default ErrorView;