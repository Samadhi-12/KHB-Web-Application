import React from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from './components/protectedRoute';

import Nav from "./components/navigation";

import Admin from "./routes/adminDashboard";
import InventoryManager from './routes/inventoryManagerDashboard'
import Customer from "./routes/customerDashboard";
import Delivery from "./routes/deliveryDashboard";
import CustomerSupporter from "./routes/supportDashboard";
import Login from "./pages/signin";
import Signup from "./pages/signup";
import Logout from "./components/logout";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import ContactUsForm from "./pages/ContactUsForm";
import Chatbot from "./Chatbot/Chatbot";
import VerifyEmail from "./components/verifyemail";
import ForgotPassword from "./pages/forgotPassword";
import ResetPassword from "./components/resetPassword";
import ViewProduct from "./pages/viewproduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/product/:id" element={<ViewProduct />} />
        
        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/signin" element={<Login />} />

        <Route path="/forgotpassword" element={<ForgotPassword/>} />

        <Route path="/logout" element={<Logout />} />

        <Route path= "/contactform" element={<ContactUsForm/>}/>

        <Route path="/verify/:token" element={<VerifyEmail />} />

        <Route path="/reset/:token" element={<ResetPassword />} />


        <Route 
          path="/admin-dashboard/*" 
          element={<ProtectedRoute allowedRoles={['admin']}><Admin /></ProtectedRoute>} 
        />
        <Route 
          path="/customer-dashboard/*" 
          element={<ProtectedRoute allowedRoles={['customer']}><Customer /></ProtectedRoute>} 
        />
        <Route 
          path="/inventory-dashboard/*" 
          element={<ProtectedRoute allowedRoles={['inventory_manager']}><InventoryManager /></ProtectedRoute>} 
        />
        <Route 
          path="/support-dashboard/*" 
          element={<ProtectedRoute allowedRoles={['customer_supporter']}><CustomerSupporter /></ProtectedRoute>} 
        />
        <Route 
          path="/deliver-dashboard/*" 
          element={<ProtectedRoute allowedRoles={['deliver']}><Delivery /></ProtectedRoute>} 
        />
      </Routes>
      <Chatbot />
    </div>
  )
}

export default App;


