import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import CustomerHandler from "./page/customer/CustomerHandler";
import SellerHandler from "./page/seller/SellerHandler";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/customer" element={<CustomerHandler />} />
            <Route
              path="/seller"
              element={<SellerHandler selectedPage={2} />}
            />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
