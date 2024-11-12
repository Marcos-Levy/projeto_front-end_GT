
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayout } from "../layout/pageLayout";
import { HomePage } from "../pages/homePage";
import { Produtos } from "../pages/productListingPage";
import { PageNotFound } from "../pages/pageNotFound";
import { ProductView } from "../pages/productViewPage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Scroll = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}

export const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Scroll/>
                <Routes>
                    
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/produtos" element={<Produtos />} />
                        <Route path="/produtos/:id" element={<ProductView />} />
                        <Route path="/categorias" element={<PageNotFound/>} />
                        <Route path="/myprodutos/" element={<PageNotFound/>} />
                        

                    </Route>
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>

            </BrowserRouter>
        </>
    );
}

