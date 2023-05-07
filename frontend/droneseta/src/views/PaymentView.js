import "../assets/css/paymentView.css"
import MyHeader from "../components/MyHeader";
import MyTitle from "../components/MyTitle";
import MyButton from "../components/MyButton";
import MyPaymentSelect from "../components/MyPaymentSelect";
import { useProductCtx } from "../utils/products";
import { useNavigate } from "react-router-dom";

function PaymentView() {
    const ctxProduct = useProductCtx();
    const navigate = useNavigate();

    // Para Controlar o clique no botão de finalizar
    function handlerFinalizar() {
        navigate("/");
    }

    // Para recuperar o tempo estimado de entrega
    function getTempoEntrega() {
        return 3;
    }

    return (
        <div>
            <MyHeader />
            <div id="divPayment">
                <MyTitle 
                    text="Pagamento"
                    icon="fa-solid fa-cash-register"
                />
                <div id="divTotalPayment">
                    <div id="divInfosTotalPayment">
                        <div className="itemInfosTotalPayment">
                            <h3 className="txtInfosTotalPayment">Total dos Produtos</h3>
                            <h3 className="valInfosTotalPayment">{ ctxProduct.getTotalCartProducts().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</h3>
                        </div>
                        <div className="itemInfosTotalPayment">
                            <h3 className="txtInfosTotalPayment">Total dos Descontos</h3>
                            <h3 className="valInfosTotalPayment">{ ctxProduct.getDescProducts().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</h3>
                        </div>
                        <div className="itemInfosTotalPayment">
                            <h3 className="txtInfosTotalPayment">Total do Frete</h3>
                            <h3 className="valInfosTotalPayment">{ ctxProduct.getTotalFrete().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</h3>
                        </div>
                        <div className="itemInfosTotalPayment">
                            <h2 className="txtInfosTotalPayment">Valor Total do Produto</h2>
                            <h2 className="valInfosTotalPayment">{ ctxProduct.getFinalValue().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</h2>
                        </div>
                    </div>
                    <div id="divFormaTotalPayment">
                        <h2>Forma de Pagamento</h2>
                        <MyPaymentSelect
                            selId="selPayment"
                            options={[
                                {payment: "Boleto"},
                                {payment: "Cartão"},
                                {payment: "Pix"},
                            ]}
                        />
                        <MyButton 
                            text="Finalizar Pedido"
                            event={ handlerFinalizar }
                        />
                    </div>
                </div>
                <MyTitle
                    text="Prazo de Entrega"
                    icon="fa-solid fa-clock"
                />
                <div id="divEntrega">
                    <h3>Após confirmado o pagamento, seu pedido será entregue em <strong>{ getTempoEntrega() } horas</strong>.</h3>
                </div>
            </div>
        </div>
    );
}

export default PaymentView;