import "../assets/css/mySelect.css"

// Componente de select padrao
// props.selId == id do select
// props.options == as opções do select
function MyPaymentSelect(props) {
    return (
        <div id="divSelect">
            <select id={ props.selId } className="select">
                { props.options.map((opt, index) => (
                    <option value={ opt.payment } key={ index } >{ opt.payment }</option>
                )) }
            </select>
        </div>
    );
}

export default MyPaymentSelect;