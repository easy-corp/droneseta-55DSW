/* Contexto destinado ao login, as informações aqui colocadas
   podem ser acessadas a partir de diferentes pontos da nossa
   aplicação */

import { createContext, useContext, useState } from "react";

export const AuthCtx = createContext();
export const useAuthCtx = () => useContext(AuthCtx);

const pessoas = [ 
    {
        tipo: 1,
        usuario: "admin",
        senha: "1234"
    },
    {
        tipo: 2,
        usuario: "luis",
        senha: "1234"
    },
]

const pessoaLogada = null;

function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false);        //Para fazer autenticacao de login

    // Metodo de login
    // Verificar para validar dados em banco posteriormente
    function logar(usuario, senha) {
        pessoas.forEach(pessoa => {
            if (pessoa.usuario === usuario && pessoa.senha === senha) {
                this.pessoaLogada = pessoa;
            }
        });

        if (this.pessoaLogada === null) {
            setAuth(false);

            return false;
        } else {
            setAuth(true);

            return true;
        }
    }

    // Metodo de logout
    function sair() {
        setAuth(false);
    }

    // Para retornar o tipo de usuario (comprador ou administrador)
    function getUserTipo() {
        return this.pessoaLogada.tipo;
    }

    return (
        <AuthCtx.Provider value={{ auth, logar, sair, getUserTipo }}>
            { children }
        </AuthCtx.Provider>
    );
}

export default AuthProvider;