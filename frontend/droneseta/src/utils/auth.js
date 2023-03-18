/* Criamos um contexto para poder compartilhar dados entre muitos
   componentes. Serve para espalhar infos que serao requiridas em
   muitos lugares diferentes */

import { createContext, useState } from "react";

export const Auth = createContext();
export const useAuth = () => useState(false);

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
        <Auth.Provider value={{ auth, logar, sair }}>
            { children }
        </Auth.Provider>
    );
}

export default AuthProvider;