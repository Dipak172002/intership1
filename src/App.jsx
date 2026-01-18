import Router from "./router"
import ProductProvider from "./context/context";

function App() {
  return ( 
  <>
  <ProductProvider>
  <Router/>
  </ProductProvider>
  </>
  )
}
export default App;