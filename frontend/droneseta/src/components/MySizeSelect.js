import "../assets/css/mySelect.css"

// Componente de select padrao
// props.selId == id do select
// props.options == as opções do select
function MySizeSelect(props) {
    return (
        <div id="divSelect">
            <select id={ props.selId } className="select">
                { props.options.map((opt, index) => (
                    // opt.qtd > 0 && <option value={ opt.tamanho } key={ index } >{ opt.tamanho }</option>
                    <option value={ opt.tamanho } key={ index } >{ opt.tamanho }</option>
                )) }
            </select>
        </div>
    );
}

export default MySizeSelect;