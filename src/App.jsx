import { BrowserRouter, Routes, Route } from "react-router-dom"
import Catalogo from "./components/Catalogo"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Carrito from "./components/Carrito"
import Alta from "./components/Alta"
import ModalContextProvider from "./components/context/ModalContext"

function App() {
  return (
    <>
      <ModalContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<Catalogo />} />
            <Route path={"/categoria/:id"} element={<Catalogo />} />
            <Route path={"/alta"} element={<Alta />} />
            <Route path={"/carrito"} element={<Carrito />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ModalContextProvider>
    </>
  )
}

export default App
