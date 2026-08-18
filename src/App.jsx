import { useState } from 'react'
import Header from './components/Header'
import ProductGrid from './components/ProductGrid'
import CartSideBar from './components/CartSideBar'
import { CartProvider } from './components/CartContext'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <CartProvider>
      <Header onToggleCart={toggleCart} setSearchQuery={setSearchQuery} />
      <ProductGrid searchQuery={searchQuery} />
      <CartSideBar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </ CartProvider>
  )
}

export default App
