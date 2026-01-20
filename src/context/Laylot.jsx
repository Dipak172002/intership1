import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";


function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
