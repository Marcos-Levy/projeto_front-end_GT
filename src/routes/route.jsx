
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayout } from "../layout/pageLayout";
import { HomePage } from "../pages/homePage";
import { Produtos } from "../pages/productListingPage";
import { PageNotFound } from "../pages/pageNotFound";
import { ProductView } from "../pages/productViewPage";



export const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/produtos" element={<Produtos/>} />
                        <Route path="/produto" element={<ProductView/>}/>
                        <Route path="/categorias" element={''} />
                        <Route path="/myprodutos" element={''} />
                        <Route path="*" element={<PageNotFound />} />

                    </Route>

                </Routes>

            </BrowserRouter>
        </>
    );
}

