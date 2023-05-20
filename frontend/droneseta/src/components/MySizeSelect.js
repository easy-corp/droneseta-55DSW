import "../assets/css/mySelect.css"

// Componente de select padrao
// props.selId == id do select
// props.options == as opções do select
function MySizeSelect(props) {
    return (
        <div id="divSelect">
            <select id={ props.selId } className="select">
                { props.options.map((opt, index) => (
                    <option value={ opt } key={ index } >{ opt }</option>
                )) }
            </select>
        </div>
    );
}

export default MySizeSelect;