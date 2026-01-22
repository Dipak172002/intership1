import Router from "./router"
import ProductProvider from "./Usecontext/context";

function App() {
  return (
    <div
      className="min-h-screen w-full bg-repeat  bg-top "
      style={{ backgroundImage: "url('/pbi.png')" }}
    >
      {/* overlay to control opacity */}
      <div className="min-h-screen bg-black/40">
        <ProductProvider>
          <Router />
        </ProductProvider>
      </div>
    </div>
  )
}
export default App;
