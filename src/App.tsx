import { Navigate, Route, Routes } from "react-router-dom"
import { Footer } from "./components/common/Footer"
import { NavBar } from "./components/common/NavBar"
import { Hero } from "./components/Hero"
import { Products } from "./components/Products"
import { Equipo } from "./components/Equipo"
import { Comprar } from "./components/Comprar"
import { Cart } from "./components/Cart"
import { ButtonWsp } from "./components/common/ButtonWsp"
import { ScrollTop } from "./helpers/ScrollTop"

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <ScrollTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/products/:productTitle" element={<ProductDetail />} /> */}
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ButtonWsp />
      <Footer />
    </div>
  )
}

export default App
