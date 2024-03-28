import Landing from "./components/Pages/Landing";
import LoginBoxForm from "./components/Pages/LoginBoxForm";
import MemoryGame1 from "./components/Pages/MemoryGame1";
import ForgotPassword from "./components/Pages/ForgotPassword";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./components/Pages/SignUp";
import Homepage from "./components/Pages/Homepage";
import Education from "./components/Pages/Education";
import NotFound from "./components/Pages/NotFound";
import NewsLetter from "./components/Pages/NewsLetter";

const baseurl = import.meta.env.BASE_URL || "/"; //deciding which url to use, this is importing when hosting on the server.

function App() {
  return (
    //these are the routes that load the various pages of the website depending on which url the user uses.
    <BrowserRouter basename={baseurl}>
      <Routes>
        <Route path="" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<LoginBoxForm></LoginBoxForm>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/homepage" element={<Homepage></Homepage>}></Route>
        <Route path="/education" element={<Education></Education>}></Route>
        <Route path="/training" element={<MemoryGame1></MemoryGame1>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/newsletter" element={<NewsLetter></NewsLetter>}></Route>

        <Route
          path="/forgot"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
