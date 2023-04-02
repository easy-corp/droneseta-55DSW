import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthProvider, { useAuthCtx } from "../utils/auth";
import ProductProvider from "../utils/products";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";
import ErrorView from "../views/ErrorView";
import RegisterView from "../views/RegisterView";
import CartView from "../views/CartView";
import PaymentView from "../views/PaymentView";

// Esse componente sera o responsavel por direcionar as diferentes telas do projeto
function MyRouter() {

    // Verificar autenticacao do usuario
    function AuthRoute({ children }) {
        const authCtx = useAuthCtx();

        if (authCtx.auth) {
            return children;
        }

        return <Navigate to="/login" />;
    }

    return(
        <div>
            <AuthProvider>
                <ProductProvider>
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
                            {/* Rota para tela do carrinho de compras */}
                            <Route path="/cart" element={
                                <AuthRoute>
                                    <CartView />
                                </AuthRoute>
                            }></Route>
                            {/* Rota para tela de finalização do pagamento */}
                            <Route path="/payment" element={
                                <AuthRoute>
                                    <PaymentView />
                                </AuthRoute>
                            }></Route>
                        </Routes>
                    </BrowserRouter>
                </ProductProvider>
            </AuthProvider>
        </div>
    );
}

export default MyRouter;