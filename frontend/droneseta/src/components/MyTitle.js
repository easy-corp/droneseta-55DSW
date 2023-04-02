import "../assets/css/myTitle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Componente de título para subsessões da teal
// props.text == texto do título
// props.icon == icone no título
function MyTitle(props) {
    return (
        <div id="divTitle">
            <FontAwesomeIcon icon={ props.icon } id="icTitle" />
            <h1 id="textTitle">{ props.text} </h1>
        </div>
    );
}

export default MyTitle;