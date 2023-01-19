import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Contactus from './components/Contact Us'
// import FooterPage from './components/FooterPage'

import './App.css'

const App = () => ( 
<BrowserRouter>
<Routes>
<Route index element={<Home />} />
<Route path="About_Us" element={<AboutUs />} />
<Route path="Products" element={<Products />} />
<Route path="Testimonials" element={<Testimonials />} />
<Route path="Contact_us" element={<Contactus />} />
</Routes>
</BrowserRouter>
)

export default App
