/* Contexto destinado ao login, as informações aqui colocadas
   podem ser acessadas a partir de diferentes pontos da nossa
   aplicação */

import { createContext, useContext, useState } from "react";

export const AuthCtx = createContext();
export const useAuthCtx = () => useContext(AuthCtx);

function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false);        //Para fazer autenticacao de login

    // metodo de login
    // verificar para validar dados em banco posteriormente
    function logar(usuario, senha) {
        if (usuario === "admin" && senha === "1234") {
            setAuth(true);

            return true;
        } else {
            setAuth(false);

            return false;
        }
    }

    // metodo de logout
    function sair() {
        setAuth(false);
    }

    return (
        <AuthCtx.Provider value={{ auth, logar, sair }}>
            { children }
        </AuthCtx.Provider>
    );
}

export default AuthProvider;