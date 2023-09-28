import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Account from "./components/Account";
import Cart from "./components/Cart";
import SingleProduct from "./components/SingleProduct";
import Admin from "./AdminComponents/Admin";
import AdminUsers from "./AdminComponents/AdminUsers";
import CreateUsers from "./AdminComponents/CreateUsers";
import AdminProducts from "./AdminComponents/AdminProducts";
import CreateProducts from "./AdminComponents/CreateProducts";
import EditProduct from "./AdminComponents/EditProduct";
import EditUsers from "./AdminComponents/EditUsers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/editproduct/:productId" element={<EditProduct />} />
        <Route path="/editusers/:userId" element={<EditUsers />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminusers" element={<AdminUsers />} />
        <Route path="/createusers" element={<CreateUsers />} />
        <Route path="/adminproducts" element={<AdminProducts />} />
        <Route path="/createproducts" element={<CreateProducts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
