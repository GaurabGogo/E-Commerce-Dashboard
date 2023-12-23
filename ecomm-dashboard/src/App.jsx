import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

function App() {
  return (
    <div className="text-center">
      <BrowserRouter>
        <Header />
        <h1 className="text-center">E-Comm Website</h1>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/update" element={<UpdateProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
