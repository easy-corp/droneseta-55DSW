/* Contexto destinado aos relatorio, as informacoes aqui colocadas
   podem ser acessadas a partir de diferentes pontos da nossa
   aplicação */

import { createContext, useContext, useState } from "react";

export const RelatoryCtx = createContext();
export const useRelatoryCtx = () => useContext(RelatoryCtx);

function RelatoryProvider({ children }) {
    // Para gerar os relatorios iniciais
    // Futuramente vira do backend
    function initRelatories() {
        return [
            {
                id: 1,
                title: "Clientes Cadastrados",
            },
            {
                id: 2,
                title: "Produtos mais vendidos",
            },
            {
                id: 3,
                title: "Pedidos Pendentes",
            },
            {
                id: 4,
                title: "Pedidos Finalizados",
            },
        ];
    }

    // Pare pegar um relatorio pelo id
    function getRelatory(tipo) {
        return relatories.find(rel => rel.id == tipo);
    }

    const [relatories, setRelatories] = useState(initRelatories());     // Relatorios

    return (
        <RelatoryCtx.Provider value={{ getRelatory }}>
            { children }
        </RelatoryCtx.Provider>
    );
}

export default RelatoryProvider;