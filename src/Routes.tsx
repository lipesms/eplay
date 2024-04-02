import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/categorias" element={<Categories />}></Route>
    <Route path="/product/:id" element={<Product />}></Route>
  </Routes>
)

export default Rotas
