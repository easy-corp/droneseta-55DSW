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
                title: "Produtos mais vendidos",
                relCabecalho: [
                    {
                        titulo: "Código",
                        formato: "Integer"
                    },
                    {
                        titulo: "Produto",
                        formato: "String"
                    },
                    {
                        titulo: "Qtd. Vendas",
                        formato: "Integer"
                    },
                ],
                relDados: [
                    [1, "Camiseta Slikpnot", 54],
                    [2, "Camiseta Linkin Park", 46],
                    [3, "Camiseta System of a Down", 35],
                    [4, "Camiseta Three Days Grace", 21],
                    [5, "Camiseta Bring Me The Horizon", 12],
                ]
            },
            {
                id: 2,
                title: "Pedidos Realizados",
                relCabecalho: [
                    {
                        titulo: "Pedido",
                        formato: "Integer"
                    },
                    {
                        titulo: "Cliente",
                        formato: "String"
                    },
                    {
                        titulo: "R$ Pedido",
                        formato: "Double"
                    },
                ],
                relDados: [
                    [1, "Luis Felipe da Silva", 49.99],
                    [2, "Murilo Goedert", 90.00],
                    [3, "Gabriel Dolzan", 25.50],
                    [4, "Lucas Dolsan", 127.99],
                    [5, "Angelina Dolzan", 317.00],
                ]
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