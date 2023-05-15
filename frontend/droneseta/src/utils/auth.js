/* Contexto destinado ao login, as informações aqui colocadas
   podem ser acessadas a partir de diferentes pontos da nossa
   aplicação */

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import api from "./api";

export const AuthCtx = createContext();
export const useAuthCtx = () => useContext(AuthCtx);


function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false);        
    const [pessoaLogada, setPessoaLogada] = useState(null);

    // Metodo de login
    async function logar(usuario, senha) {
        await axios.post(api + "/usuarios/login",
            {
                "username": usuario,
                "password": senha
            })
        .then(response => {
            setPessoaLogada(response.data);

            if (!pessoaLogada) {
                setAuth(false);
            } else {
                setAuth(true);
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    // Metodo de logout
    function sair() {
        setAuth(false);
    }

    // Para retornar o tipo de usuario (comprador ou administrador)
    function getUserTipo() {
        return pessoaLogada.tipo;
    }

    // Para recuperar a pessoa logada
    function getUser() {
        return pessoaLogada;
    }

    return (
        <AuthCtx.Provider value={{ auth, logar, sair, getUser, getUserTipo }}>
            { children }
        </AuthCtx.Provider>
    );
}

export default AuthProvider;