import "../assets/css/mySelect.css"

// Componente de select padrao
// props.selId == id do select
// props.options == as opções do select
function MyAddressSelect(props) {
    return (
        <div id="divSelect">
            <select id={ props.selId } className="select">
                { props.options.map((opt, index) => (
                    <option value={ opt.descricao } key={ index } >{ opt.descricao }</option>
                )) }
            </select>
        </div>
    );
}

export default MyAddressSelect;