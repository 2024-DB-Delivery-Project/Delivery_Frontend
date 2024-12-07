import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./page/SignUp";
import CustomerHandler from "./page/customer/CustomerHandler";
import SellerHandler from "./page/seller/SellerHandler";
import LoginPage from "./page/LoginPage";
import LogisticsHandler from "./page/logistics/LogisticsHandler";
import { RecoilRoot, useRecoilValue } from "recoil";
import { authState } from "./state/auth";
import CustomerDeliveryInfo from "./page/customer/CustomerPage/CustomerDeliverInfo";

const PrivateRoute = ({ children, role }) => {
  const auth = useRecoilValue(authState);

  if (!auth.isAuthenticated || (role && auth.role !== role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/customer"
                element={
                  <PrivateRoute role="CUSTOMER">
                    <CustomerHandler />
                  </PrivateRoute>
                }
              />
              <Route
                path="/customer/:order_id"
                element={
                  <PrivateRoute role="CUSTOMER">
                    <CustomerDeliveryInfo />
                  </PrivateRoute>
                }
              />
              <Route
                path="/seller"
                element={
                  <PrivateRoute role="SELLER">
                    <SellerHandler />
                  </PrivateRoute>
                }
              />
              <Route
                path="/logistics"
                element={
                  <PrivateRoute role="LOGISTIC">
                    <LogisticsHandler />
                  </PrivateRoute>
                }
              />
            </Routes>
          </header>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
