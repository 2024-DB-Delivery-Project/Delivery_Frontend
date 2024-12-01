import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import CustomerHome from "./page/customer/CustomerPage/CustomerHome";
import CustomerHandler from "./page/customer/CustomerHandler";

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
            <Route path="/customer/home" element={<CustomerHome />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
