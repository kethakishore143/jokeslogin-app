import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Loginform";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/jokeslogin-app" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
