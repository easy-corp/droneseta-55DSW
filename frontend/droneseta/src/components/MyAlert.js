import "../assets/css/myAlert.css"

// Componente para adicionar um aviso no topo da tela
// Os diferentes tipos de mensagem são definidos pelo props.tipo
// erro == para mensagens de erro
// sucesso == para mensagens de sucesso
function MyAlert(props) {
    return (
        <div className={props.tipo} id="divAlerta">
            <p>{props.text}</p>
        </div>
    );
}

export default MyAlert;