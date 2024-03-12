"use client";

import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {AllProductsContainer} from "@/components/components/main/allProducts/AllProductsContainer";
import {CartContainer} from "@/components/components/cart/cart/CartContainer";
import page_scss from './page.module.scss'
export default function Home() {
    return (
        <main className={page_scss.route}>
            <Router>
                <Routes>
                    <Route path={'/'} element={<AllProductsContainer/>}/>
                    <Route path={'/products'} element={<AllProductsContainer/>}/>
                    <Route path={'/cart'} element={<CartContainer/>}/>
                </Routes>
            </Router>
        </main>
    );
}
