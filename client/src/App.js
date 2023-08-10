import "./App.css";

import { Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
