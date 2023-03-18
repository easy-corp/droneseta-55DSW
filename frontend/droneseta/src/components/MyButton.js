import "../assets/css/myButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MyButtonIcon(props) {
    return (
        <button className="btnPadrao" onClick={ props.event } >
            {/* Renderizacao condicional 
                So sera feita caso a condicao seja atendida */}
            { props.icon && <FontAwesomeIcon icon={ props.icon } id="icEnter" /> }
            { props.text }
        </button>
    );
}

export default MyButtonIcon;