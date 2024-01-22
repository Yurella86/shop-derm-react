// import './style/extend.scss';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {
    Cart,
    ComparePage,
    Services,
    Products,
    Specials,
    GiftCard,
    Account,
    Authentication,
    AdminPanel,
} from "../components";
import "../style/extend.scss";
import CartProvider from "../store/cart-provider";
import ProductProvider from "../store/ProductApi/productProvider";
import {Fragment} from "react";
import HomePage from "../components/Pages/HomePage/homePage";
import RootLayout from "../components/root/RootLayout";
import CompareProvider from "../store/ComparePage/compare";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {index: true, element: <HomePage />},
            {path: "/cart", element: <Cart />},
            {path: "/compare", element: <ComparePage />},
            {path: "/account", element: <Account />},
            {path: "/auth", element: <Authentication />},
            {
                path: "/category",
                children: [
                    {path: "services", element: <Services />},
                    {path: "all_products", element: <Products />},
                    {path: "gift_card", element: <GiftCard />},
                    {path: "specials", element: <Specials />},
                ],
            },
        ],
    },
    {path: "/admin_p", element: <AdminPanel />},
]);

function App() {
    return (
        <Fragment>
            <CompareProvider>
                <ProductProvider>
                    <CartProvider>
                        <div className="body-container">
                            <RouterProvider router={router} />
                        </div>
                    </CartProvider>
                </ProductProvider>
            </CompareProvider>
        </Fragment>
    );
}

export default App;
