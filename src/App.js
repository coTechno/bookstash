import React from "react";
import "./App.css";
import NavigationBar from "./component/header/NavigationBar";
import Home from './component/pages/home/Home';
import About from './component/pages/about/About';
import Contact from './component/pages/contact/Contact';
import Cart from './component/pages/cart/Cart';
import NotFound from './component/pages/error/NotFound';
import ProductDetails from './component/pages/home/product/productDetails/ProductDetails';
import Footer from './component/footer/Footer';
import {Routes, Route} from 'react-router-dom';


function App() {
  // const dispatch = useDispatch()

  return (
    <div>
      <NavigationBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}


export default App;
