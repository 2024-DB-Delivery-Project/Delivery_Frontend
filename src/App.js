import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import CustomerHome from "./page/customer/CustomerHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/customerHome" element={<CustomerHome />}></Route>
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
