import "../assets/css/myButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Componente de botao padrao
// props.event == evento de click
// props.text == texto do botao
// props.icon == icone no botao (opcional)
function MyButtonIcon(props) {
    return (
        <button className="btnPadrao" onClick={ props.event } >
            {/* Renderizacao condicional 
                So sera feita caso a condicao seja atendida */}
            { props.icon && <FontAwesomeIcon icon={ props.icon } id="icButton" /> }
            { props.text }
        </button>
    );
}

export default MyButtonIcon;