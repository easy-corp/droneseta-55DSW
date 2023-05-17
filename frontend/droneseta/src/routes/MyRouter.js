import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthProvider, { useAuthCtx } from "../utils/auth";
import ProductProvider from "../utils/products";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";
import ErrorView from "../views/ErrorView";
import RegisterView from "../views/RegisterView";
import CartView from "../views/CartView";
import PaymentView from "../views/PaymentView";
import ProductView from "../views/ProductView";
import PanelView from "../views/StorePanelView";
import CadProductView from "../views/CadProductView";
import ListProductsView from "../views/ListProductsView";
import RelatoryView from "../views/RelatoryView";
import RelatoryProvider from "../utils/relatory";

// Esse componente sera o responsavel por direcionar as diferentes telas do projeto
function MyRouter() {

    // Verificar autenticacao do usuario
    function AuthRoute({ children }) {
        const authCtx = useAuthCtx();

        if (authCtx.getAuth()) {
            return children;
        }

        return <Navigate to="/login" />;
    }

    return(
        <div>
            <AuthProvider>
                <ProductProvider>
                    <RelatoryProvider>
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
                                {/* Rota para tela de produto */}
                                <Route path="/produto/:indexProduct" element={<ProductView />}></Route>
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
                                {/* Rota para o painel do administrador */}
                                <Route path="/panel" element={
                                    <AuthRoute>
                                        <PanelView />
                                    </AuthRoute>
                                }></Route>
                                {/* Rota para cadastrar produtos */}
                                <Route path="/cadProduct" element={
                                    <AuthRoute>
                                        <CadProductView />
                                    </AuthRoute>
                                }></Route>
                                {/* Rota para consultar produtos cadastrads */}
                                <Route path="/listProducts" element={
                                    <AuthRoute>
                                        <ListProductsView />
                                    </AuthRoute>
                                }></Route>
                                {/* Rota para consultar relatorio, recebe o tipo de relatorio como parametro */}
                                <Route path="/relatory/:tipo" element={
                                    <AuthRoute>
                                        <RelatoryView />
                                    </AuthRoute>
                                }></Route>
                            </Routes>
                        </BrowserRouter>
                    </RelatoryProvider>
                </ProductProvider>
            </AuthProvider>
        </div>
    );
}

export default MyRouter;