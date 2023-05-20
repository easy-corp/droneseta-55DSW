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
    const [alert, setAlert] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (!pessoaLogada) {
            setAuth(false);
        } else {
            setAuth(true);
            setAlert("");
        }
    }, [pessoaLogada]);

    // Metodo de login
    async function logar(usuario, senha) {
        await axios.post(api + "/usuarios/login", {
            "username": usuario,
            "password": senha
        })
        .then(response => {
            setPessoaLogada(response.data);
        })
        .catch(error => {
            console.log(error);
            setAlert(error.response.data);
        })
    }

    // Metodo de logout
    function sair() {
        this.pessoaLogada = null;
        setAuth(false);
    }

    // Para retornar o tipo de usuario (comprador ou administrador)
    function getUserTipo() {
        if (pessoaLogada) {
            return pessoaLogada.tipo;
        }
        return null;
    }

    // Para recuperar a pessoa logada
    function getUser() {
        return pessoaLogada;
    }

    // Para recuperar todas as pessoas
    async function getUsers() {
        axios.get(api + "/usuarios")
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.log(error);
        }) 
    }

    // Para alterar o usuario
    async function updateUser(id, user) {
        await axios.put(api + "/usuarios/" + id, user)
        .then(response => {
            // console.log(response);
        })
        .catch(error => {
            console.log(error);
        })  
    }

    // Para recuperar se foi logada
    function getAuth() {
        return auth;
    }

    return (
        <AuthCtx.Provider value={{ getAuth, alert, logar, sair, getUser, updateUser, getUsers, users, getUserTipo}}>
            { children }
        </AuthCtx.Provider>
    );
}

export default AuthProvider;