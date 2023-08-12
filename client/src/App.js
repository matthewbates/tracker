import "./App.css";

import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurrentUser(foundUser);
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
