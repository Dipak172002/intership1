import { BrowserRouter, Routes, Route } from "react-router";
// import CreateProduct  from "../LocalStorage/Home";
// import ProductNavigation  from "../LocalStorage/Navigation";
import CreateProduct from "../context/Home";
import ProductNavigation from "../context/Navigation";
import Layout from "../context/Laylot";
import  ProductReport from "../context/report";
import Setting from "../context/setting";
import About from "../context/about";
import Help from "../context/help";


export default function Router() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <Layout>
                            <CreateProduct />
                        </Layout>
                    } />
                    <Route path="/navigation" element={
                        <Layout>
                        <ProductNavigation />
                        </Layout>
                    } />
                    <Route path="/report" element={
                        <Layout>
                        <ProductReport />
                        </Layout>
                    } />
                    <Route path="/setting" element={
                        <Layout>
                            <Setting/>
                        </Layout>
                    }/>
                    <Route path="/about" element={ 
                        <Layout>
                            <About/>
                        </Layout>
                    }/>
                    <Route path="/help" element={
                        <Layout>
                            <Help/>
                        </Layout>
                    }/>
                </Routes>
            </BrowserRouter>

    )
}