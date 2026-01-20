import { BrowserRouter, Routes, Route } from "react-router";
// import CreateProduct  from "../product/Home";
// import ProductNavigation  from "../product/Navigation";
import CreateProduct from "../context/Home";
import ProductNavigation from "../context/Navigation";
import Layout from "../context/Laylot";
import ProductProvider from "../context/context";
import Header from "../context/Header";
import Footer from "../context/Footer";


export default function Router() {
    return (
        <ProductProvider>
            <BrowserRouter>
                    <Header/>
                <Routes>
                    <Route
                    // element={<Layout />}
                    >
                        <Route path="/" element={<CreateProduct />} />
                        <Route path="/navigation" element={<ProductNavigation />} />
                    </Route>
                </Routes>
                        <Footer/>
            </BrowserRouter>
        </ProductProvider>

    )
}