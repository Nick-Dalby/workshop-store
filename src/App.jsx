import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Navbar, Sidebar } from './components'
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  PrivateRoute,
  Products,
  SingleProduct,
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }/>
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
