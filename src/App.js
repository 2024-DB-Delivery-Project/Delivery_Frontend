import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./page/SignUp";
import CustomerHandler from "./page/customer/CustomerHandler";
import SellerHandler from "./page/seller/SellerHandler";
import Login from "./page/LoginPage";
import LogisticsHandler from "./page/logistics/LogisticsHandler";

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
            <Route path="/seller" element={<SellerHandler />} />
            <Route path="/logistics" element={<LogisticsHandler />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
