import { BrowserRouter,Routes,Route } from "react-router";
// import CreateProduct  from "../product/Home";
// import ProductNavigation  from "../product/Navigation";
import CreateProduct  from "../context/Home";
import ProductNavigation  from "../context/Navigation";


export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<CreateProduct/>}></Route>
            <Route path="/navigation" element={<ProductNavigation/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}