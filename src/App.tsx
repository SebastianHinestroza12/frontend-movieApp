import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { ResetPassword } from "./Components/ForgotPassword/Forgot";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
