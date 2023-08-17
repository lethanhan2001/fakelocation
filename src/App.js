import * as React from "react";
import Search from "./component/Search";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import Home from "./component/page/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reset from "./component/Reset";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Search />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Registration" element={<Registration />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Reset" element={<Reset />}></Route>
      </Routes>
    </>
  );
}

export default App;
