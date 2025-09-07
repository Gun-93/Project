import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import Products from './Pages/Products';
import CartPage from './Pages/CartPage';
import { CartProvider } from './Components/CartContext.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} /> 
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    
  );
}
export default App;
