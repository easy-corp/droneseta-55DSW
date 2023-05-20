/* Contexto destinado aos relatorio, as informacoes aqui colocadas
   podem ser acessadas a partir de diferentes pontos da nossa
   aplicação */

import { createContext, useContext, useEffect, useState } from "react";
import api from "./api";
import axios from "axios";

export const RelatoryCtx = createContext();
export const useRelatoryCtx = () => useContext(RelatoryCtx);

function RelatoryProvider({ children }) {
    const [relatory, setRelatory] = useState(null);     // Relatorios
    const [id, setId] = useState();

    // Para gerar os relatorios iniciais
    // Futuramente vira do backend
    const initRelatories = [
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
                // Exemplo do formato [CODIGO PRODUTO, NOME PRODUTO, QTD]
                // [1, "Camiseta Slikpnot", 54],
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
                    titulo: "R$ Total",
                    formato: "Double"
                },
                {
                    titulo: "Situação",
                    formato: "String"
                },
            ],
            relDados: [
                // Exemplo do formato [CODIGO PEDIDO, NOME CLIENTE, VALOR, SITUACAO]
                // [1, "Luis Felipe da Silva", 49.99, "Encerrado"],
            ]
        },
    ];

    // Quando o relatorio for chamado, busca seus dados
    useEffect(() => {
        if (relatory) {
            //Se ainda nao tiver feito, gera os dados do relatorio
            if (relatory.relDados.length === 0) {
                getRelatoryData(id);
            }            
        }
    }, [relatory]);

    // Pare pegar um relatorio pelo id
    function getRelatory(tipo) {
        setRelatory(initRelatories[(tipo - 1)]);
        setId(tipo);
    }

    // Para buscar os dados do relatorio
    async function getRelatoryData(tipo) {
        let novoRelatorio;
        let data = [];

        if (tipo == 1) {
            // Produtos mais vendidos
            let pedidos;

            await axios.get(api + "/pedidos")
            .then(response => {
                pedidos = response.data
            })
            .catch((error) => {
                console.log(error);
            })

            // Passa por todos os pedidos
            for (let i = 0; i < pedidos.length; i++) {
                let pedido = pedidos[i];
                
                // Passa por todos os itens
                for (let n = 0; n < pedido.itens.length; n++) {
                    let item = pedido.itens[n];

                    // Se esse item ainda nao estiver presente, inclui o mesmo
                    if (!data.some(subData => subData[0] === item.camiseta.id)) {
                        data.push([
                            item.camiseta.id,
                            item.camiseta.descricao,
                            item.camiseta.estoque.length
                        ]);
                    } else {
                        // Procura o item no array e incrementa sua quantidade
                        let index = data.findIndex(subData => subData[0] === item.camiseta.id);

                        data[index][2] += item.camiseta.estoque.length;
                    }
                }
            }

            // Ordena os dados pela quantidade
            data.sort((a, b) => {
                return b[2] - a[2]
            });
        } else if (tipo == 2) {
            // Pedidos realizados
            let clientes;

            await axios.get(api + "/usuarios")
            .then(response => {
                clientes = response.data
            })
            .catch((error) => {
                console.log(error);
            })

            // Passa por todos os clientes
            for (let i = 0; i < clientes.length; i++) {
                let cliente = clientes[i];

                //Passa por todos os pedidos de cada cliente
                for (let n = 0; n < cliente.pedidos.length; n++) {
                    let pedido = cliente.pedidos[n];

                    let valorTotal = 0;

                    for (let c = 0; c < pedido.itens.length; c++) {
                        let item = pedido.itens[c];

                        valorTotal += item.camiseta.preco;
                    }

                    data.push([
                        pedido.id,
                        cliente.nome,
                        valorTotal,
                        pedido.situacao
                    ]);
                }
            }

            // Ordena os pedidos pelo codigo
            data.sort((a, b) => {
                return a[0] - b[0];
            });
        }

        novoRelatorio = {...relatory, relDados: data}

        setRelatory(novoRelatorio);
    }

    return (
        <RelatoryCtx.Provider value={{ relatory, getRelatory, getRelatoryData }}>
            { children }
        </RelatoryCtx.Provider>
    );
}

export default RelatoryProvider;