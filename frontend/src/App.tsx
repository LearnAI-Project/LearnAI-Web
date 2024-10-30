import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ForgotYourPassword } from "./pages/auth/ForgotYourPassword";
import { RecoverYourAccount } from "./pages/auth/RecoverYourAccount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-your-password" element={<ForgotYourPassword />} />
          <Route path="/recover-your-account" element={<RecoverYourAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
