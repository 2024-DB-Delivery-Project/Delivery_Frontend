import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Login />}></Route>
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
