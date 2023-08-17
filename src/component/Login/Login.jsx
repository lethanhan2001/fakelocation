import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bg from "../images/thinkdiff.jpg";
import login from "../images/login.png";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://14.225.7.221:3002/login", {
        email: email,
        password: password,
      });
      console.log(res.data);
      toast.success("Đăng nhập thành công");
      navigate("/Home");
    } catch (error) {
      toast.error(error.message);
      console.log("sai ", error);
    }
  };

  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          background: `url(${login})`,
          backgroundSize: "cover",
        }}
      >
        <div className=" flex justify-between pl-40  items-center vh-100">
          <div className="flex mt-48 flex-col justify-center items-center">
            <p className="text-white font-semibold  w-2/3 text-center">
              Lorem ipsum dolor sit amet consectetur. Lacus pulvinar vitae
              tempor
            </p>
            <button
              className="bg-[rgba(255,255,255,0.3)] border-2 border-white text-white w-[250px] py-2 font-bold cursor-pointer rounded-3xl"
              type="submit"
            >
              <Link className="text-white text-decoration-none" to={`/Login`}>
                Register
              </Link>
            </button>
          </div>
          <div className="w-1/2 pl-16">
            <form className="flex flex-col  w-1/2" onSubmit={handleSubmit}>
              <h3 className="text-center text-white">Login</h3>
              <div className="mb-2">
                <br />
                <input
                  style={{ color: "white" }}
                  className="mb-6 w-full bg-[rgba(0,0,0,0)] border-b-2 border-t-0 border-r-0 border-l-0 outline-none border-b-white py-2 "
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoComplete="username"
                  placeholder="Username"
                />
              </div>
              <div className="mb-2 ">
                <input
                  style={{ color: "white" }}
                  className="mb-6 w-full relative bg-[rgba(0,0,0,0)] border-b-2 border-t-0 border-r-0 border-l-0 outline-none border-b-white py-2 "
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="Password"
                />
              </div>

              <div className="d-grid">
                <Link to={`/reset`} className="text-decoration-none ">
                  <p className="text-white">Do you want to reset password?</p>
                </Link>
                <button
                  className="bg-white w-[250px] py-2 font-bold cursor-pointer rounded-3xl"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
