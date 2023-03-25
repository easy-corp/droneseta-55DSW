import "../assets/css/myInput.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Componente de input padrao
// props.type == tipo do input
// props.holder == placeholder do input
// props.inpId == id do input
// props.icon == icone no botao (opcional)
// props.iconEvent == evento de click icone no botao (opcional)
function MyInput(props) {
    const class1 = "input";

    return (
        <div id="divInput">
            <input type={ props.type } placeholder={ props.holder } id={ props.inpId } className={`${class1} ${props.size}`} />
            { props.icon && <FontAwesomeIcon icon={ props.icon } onClick={(event) => props.iconEvent(event) } id="icInput" /> }
        </div>
    );
}

export default MyInput;