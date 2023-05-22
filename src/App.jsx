import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import UpdatePage from "./pages/UpdatePage";
import CreatePage from "./pages/CreatePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import Allproducts from "./pages/AllProducts";

function App() {
  /*    const APITestConnection = async () => {
    const response = await fetch('http://localhost:5005/api')
    const parsed = await response.json()
    console.log(parsed)
  } 
*/
  useEffect(() => {
    // APITestConnection()
  }, []);

  // Routes To CRUD, delete  will be handle inside Details
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:artObjectId" element={<DetailsPage />} />
      <Route path="/update" element={<UpdatePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/allproducts" element={<Allproducts />} />
    </Routes>
  );
}

export default App;
