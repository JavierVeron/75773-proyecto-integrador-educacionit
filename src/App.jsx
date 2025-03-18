import { BrowserRouter, Routes, Route } from "react-router-dom"
import Catalogo from "./components/Catalogo"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CarritoDeCompras from "./components/CarritoDeCompras"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <CarritoDeCompras />
        <Routes>
          <Route path={"/"} element={<Catalogo />} />
          <Route path={"/categoria/:id"} element={<Catalogo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
