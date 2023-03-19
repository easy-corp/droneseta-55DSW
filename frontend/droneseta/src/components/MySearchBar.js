import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../assets/css/mySearchBar.css"

function MySearchBar() {
    return (
        <div id="colSearch">
            <input type="text" placeholder="Busque aqui" id="inpSearchBar"/>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" id="icSearch" />
        </div>
    );
}

export default MySearchBar;