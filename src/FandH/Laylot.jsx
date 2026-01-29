import Header from "./Header";
import Footer from "./Footer";

function Layout({children}) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
