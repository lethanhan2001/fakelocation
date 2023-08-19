import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import Home from "./component/page/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reset from "./component/Reset";
import Edit from "./component/edit/Edit";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Registration" element={<Registration />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Reset" element={<Reset />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </>
  );
}

export default App;
