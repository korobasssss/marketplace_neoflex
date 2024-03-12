import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {AllProductsContainer} from "@/components/components/main/allProducts/AllProductsContainer";
import {CartContainer} from "@/components/components/cart/cart/CartContainer";
export default function Home() {
    return (
        <main>
            <Router>
                <Routes>
                    <Route path={'/'} element={<Navigate to="/products" replace />}/>
                    <Route path={'/products'} element={<AllProductsContainer/>}/>
                    <Route path={'/cart'} element={<CartContainer/>}/>
                </Routes>
            </Router>
        </main>
    );
}
