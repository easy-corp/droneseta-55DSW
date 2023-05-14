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

    return (
        <div>
            <MyHeader />
            <div id="mainRelatory">
                <h2> { relatory.title } </h2>
            </div>
        </div>
    );
}

export default RelatoryView;