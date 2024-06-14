import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './components/home/Home';
import Header from './components/layout/Header.jsx';
import Footerrr from './components/layout/Footerrr.jsx';
import Cont from './components/contacts/Cont.jsx';
import Card from './components/cart/Card.jsx';
import Shipping from './components/cart/Shipping.jsx';
import Confirmorder from './components/cart/Confirmorder.jsx';
import PaymentSucess from './components/cart/PaymentSucess.jsx';
import Login  from './components/login/Login.jsx'
import Profile from './components/profile/profile.jsx' 
import Myorders  from './components/myorders/Myorders.jsx';
import OrderDetails  from './components/myorders/OrderDetails.jsx';
import Dashboard from './components/admin/Dashboard.jsx';
import Users from "./components/admin/User";
import Orders from "./components/admin/Order";
import About from "./components/about/About.jsx"




import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/found.scss';
import './styles/menu.scss'
import './styles/footer.scss'
import './styles/cont.scss'
import './styles/cart.scss'
import './styles/shipping.scss'
import  './styles/confirm.scss'
import  './styles/paymentsucess.scss'
import  './styles/login.scss'
import  './styles/profile.scss'
import  './styles/table.scss'
import './styles/orderdetails.scss'
import './styles/dashboard.scss'
import  './styles/about.scss'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Corrected the spelling of "route" to "Route" */}
        {/* Add more Route components as needed */}
        <Route path="/contact" element={<Cont />} />
        <Route path="/cart" element={<Card />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmorder" element={<Confirmorder />} />
        <Route path="/paymentsucess" element={<PaymentSucess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myorders" element={<Myorders/>} />
        <Route path ="/order/:id" element={<OrderDetails/>}/>
        <Route path ="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footerrr/>
    </Router>
  );
};

export default App;
