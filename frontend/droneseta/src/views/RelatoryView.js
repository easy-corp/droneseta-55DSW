import { useParams } from "react-router-dom";
import "../assets/css/relatoryView.css";
import MyHeader from "../components/MyHeader";
import { useRelatoryCtx } from "../utils/relatory";

/* Recebe como prop o tipo do relatorio
   1 == clientes cadastrados
   2 == produtos mais vendidos
   3 == pedidos pendentes
   4 == pedidos finalizados */
function RelatoryView() {
    const ctxRelatory = useRelatoryCtx();
    const params = useParams();
    const relatory = ctxRelatory.getRelatory(params.tipo);

    // Para saber quantas colunas tera na grid
    function getColunas() {
        let colunas = relatory.relCabecalho.length;

        let estilo = {
            gridTemplateColumns: "repeat(" + colunas + ", 1fr)",
        }

        return estilo;
    }

    // Para recuperar o tipo de dado da coluna
    function getTipoDado(index) {
        let formato = relatory.relCabecalho[index].formato;

        return formato;
    }

    // Para alterar o estilo de acordo com o tipo de dado
    // Altera o tamanho do campo de acordo com o tipo
    function getEstiloTipoDado(index) {
        let formato = getTipoDado(index);
        let estilo = [];

        if (formato === "Integer") {
            estilo = {
                width: "10vh",
            }
        } else if (formato === "Double") {
            estilo = {
                width: "25vh",
            }
        } else if (formato === "String") {
            estilo = {
                width: "40vh",
            }
        }

        return estilo;
    }

    return (
        <div>
            <MyHeader />
            <div id="mainRelatory">
                <h2> { relatory.title } </h2>
                <div id="divRelatory">
                    <div id="divCabecalho" style={ getColunas() }>
                        { relatory.relCabecalho.map((cabecalho, index) => (
                            <div key={ index } style={ getEstiloTipoDado(index) }>
                                <span>{ cabecalho.titulo }</span>
                            </div>
                        )) }
                    </div>
                    <div id="divDados" >
                        { relatory.relDados.map((dado, index) => (
                            <div className="divRowDado" style={ getColunas() }>
                                { dado.map((item, chave) => (
                                    <div className="divItem" key={ chave } style={ getEstiloTipoDado(chave) }>
                                        {/* Se o valor for double, converte para reais */}
                                        { getTipoDado(chave) === "Double" && <span>{ item.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</span> }
                                        { getTipoDado(chave) !== "Double" && <span>{ item }</span> }
                                    </div>
                                )) }
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RelatoryView;