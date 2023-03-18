import AuthProvider, { useAuth } from "../utils/auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";
import ErrorView from "../views/ErrorView";
import RegisterView from "../views/RegisterView";

// Esse componente sera o responsavel por direcionar as diferentes telas do projeto
function MyRouter() {

    // Verificar autenticacao do usuario
    function AuthRouter({ children }) {
        const authCtx = useAuth();

        if (authCtx.auth) {
            return children;
        }

        return <Navigate to="/" />;
    }

    return(
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        {/* Rota geral para caminhos nao mapeados */}
                        <Route path="*" element={<ErrorView />}></Route>
                        {/* Rota para tela inicial */}
                        <Route path="/" element={<HomeView />}></Route>
                        {/* Rota para tela de login */}
                        <Route path="/login" element={<LoginView />}></Route>
                        {/* Rota para tela de cadastro de usuário */}
                        <Route path="/cadastro" element={<RegisterView />}></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default MyRouter;