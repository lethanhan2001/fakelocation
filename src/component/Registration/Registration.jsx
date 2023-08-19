import React, { useState, useEffect } from "react";
import axios from "axios";
import "./signup.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bg from "../images/thinkdiff.jpg";
import bg2 from "../images/vector15.png";
function Registration() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [ipAddress, setIpAddress] = useState("");

  const handleTogglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  useEffect(() => {
    async function getIpRegiste() {
      const res = await axios.get("https://api.ipify.org/?format=json");
      const data = res.data;
      setIpAddress(data.ip);
    }
    getIpRegiste();
  }, []);
  const formik = useFormik({
    initialValues: {
      full_name: "",
      user_name: "",
      email: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .required(null)
        .min(4, "Must be 4 characters or more"),
      ip_register: Yup.string().required(null),

      device_register: Yup.string().required(null),

      full_name: Yup.string()
        .required(null)
        .min(6, "Must be 6 characters or more"),
      email: Yup.string()
        .required(null)
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required(null)
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number"
        ),
      confirmedPassword: Yup.string()
        .required(null)
        .oneOf([Yup.ref("password")], "Password must match"),
    }),

    onSubmit: async (values) => {
      const registrationData = {
        full_name: values.full_name,
        user_name: values.user_name,
        email: values.email,
        password: values.password,
        confirmedPassword: values.confirmedPassword,
        ip_register: ipAddress,
        device_register: "web",
      };

      try {
        const res = await axios.post(
          "http://14.225.7.221:3005/register",
          registrationData
        );
        console.log(res.data.account, {
          ...values,
        });

        toast.success(" Bạn đã đăng ký thành công");
        navigate("/Login");
      } catch (error) {
        console.log(error.message);
        toast.error("Lỗi");
      }
    },
  });

  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          background: `url(${bg2})`,
          backgroundSize: "cover",
        }}
      >
        <div className=" flex justify-between px-40 items-center vh-100">
          <div className=" w-1/2">
            <form
              className="flex flex-col  w-1/2"
              onSubmit={formik.handleSubmit}
            >
              <h3 className="text-center text-white">Register</h3>

              <p className="text-center text-white">
                Lorem ipsum dolor sit amet consectetur. Lacus pulvinar vitae
                tempor
              </p>

              <input
                style={{ color: "white" }}
                className="mb-6  bg-[rgba(0,0,0,0)] border-b-2 border-t-0 border-r-0 border-l-0 outline-none border-b-white py-2 "
                type="text"
                id="full_name"
                name="full_name"
                value={formik.values.full_name}
                onChange={formik.handleChange}
                placeholder="FullName"
              />
              {formik.errors.full_name && (
                <p className="text-red-500"> {formik.errors.full_name} </p>
              )}

              <input
                style={{ color: "white" }}
                className="mb-6  bg-[rgba(0,0,0,0)] border-b-2 border-t-0 border-r-0 border-l-0 outline-none border-b-white py-2 "
                type="text"
                id="user_name"
                name="user_name"
                value={formik.values.user_name}
                onChange={formik.handleChange}
                placeholder="Username"
              />
              {formik.errors.user_name && (
                <p className="text-red-500"> {formik.errors.user_name} </p>
              )}

              <div className="flex justify-between items-center">
                <input
                  style={{ color: "white" }}
                  className="mb-6 w-full bg-[rgba(0,0,0,0)] border-b-2 border-t-0 border-r-0 border-l-0 outline-none border-b-white py-2 "
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Email"
                  autoComplete="username"
                />
                {/* <i
                  className="fa-solid fa-eye pb-3"
                  checked={showPassword}
                  onClick={handleTogglePassword}
                ></i> */}
              </div>
              {formik.errors.email && (
                <p className="text-red-500"> {formik.errors.email} </p>
              )}

              <input
                style={{ color: "white" }}
                className="mb-6  bg-[rgba(0,0,0,0)] border-b-2 border-t-0 border-r-0 border-l-0 outline-none border-b-white py-2 "
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
                autoComplete="new-password"
              />

              {formik.errors.password && (
                <p className="text-red-500"> {formik.errors.password} </p>
              )}

              <input
                style={{ color: "white" }}
                className="mb-6  bg-[rgba(0,0,0,0)] border-b-2 border-t-0 border-r-0 border-l-0 outline-none border-b-white py-2 "
                type={showPassword ? "text" : "password"}
                id="confirmedPassword"
                name="confirmedPassword"
                value={formik.values.confirmedPassword}
                onChange={formik.handleChange}
                placeholder="Confirm your password"
                autoComplete="new-password"
              />
              {formik.errors.confirmedPassword && (
                <p className="text-red-500">
                  {" "}
                  {formik.errors.confirmedPassword}{" "}
                </p>
              )}
              {formik.errors.ip_register && (
                <p className="text-red-500"> {formik.errors.ip_register} </p>
              )}

              <div className="d-grid mt-2">
                <button
                  className="bg-white w-[250px] py-2 font-bold cursor-pointer rounded-3xl"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="flex mt-96 flex-col justify-center items-center">
            <p className="text-white text-center w-2/3">
              {" "}
              Lorem ipsum dolor sit amet consectetur. Lacus pulvinar vitae
              tempor
            </p>
            <button
              className="bg-[rgba(255,255,255,0.3)] border-2 border-white text-white w-[250px] py-2 font-bold cursor-pointer rounded-3xl"
              type="submit"
            >
              <NavLink
                className="text-white text-decoration-none"
                to={`/Login`}
              >
                Login
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
