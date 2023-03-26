import "../assets/css/myAlert.css"

// Componente para adicionar um aviso no topo da tela
/* Os diferentes tipos de mensagem são definidos pelo props.tipo
   erro    => para mensagens de erro
   sucesso => para mensagens de sucesso
   alerta  => para mensagens de alerta
    */
function MyAlert(props) {
    // Retira o alerta da tela
    function closeAlert(event) {
        var divAlerta = document.getElementById("divAlerta");

        // Espera a animacao de entrada terminar
        // Inicia a animcao de saida
        if (event.animationName === "alertIn") {
            divAlerta.classList.add("alert-out");
        }

        // Espera a animação de saida terminar
        // Retira o elemtno da tela por meio da nossa condicao
        if (event.animationName === "alertOut") {
            divAlerta.remove();
        }
    }

    return (
        <div className={props.tipo} id="divAlerta" onAnimationEnd={closeAlert} >
            <p>{props.text}</p>
        </div>
    );
}

export default MyAlert;