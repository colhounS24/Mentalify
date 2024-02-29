import Splash from "./components/Pages/Splash";
import LoginBoxForm from "./components/Pages/LoginBoxForm";
import MemoryGame1 from "./components/Pages/MemoryGame1";
import ForgotPassword from "./components/Pages/ForgotPassword";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./components/Pages/SignUp";
import Homepage from "./components/Pages/Homepage";
import Education from "./components/Pages/Education";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash></Splash>}></Route>
        <Route path="login" element={<LoginBoxForm></LoginBoxForm>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="homepage" element={<Homepage></Homepage>}></Route>
        <Route path="education" element={<Education></Education>}></Route>
        <Route path="training" element={<MemoryGame1></MemoryGame1>}></Route>
        <Route
          path="forgot"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
