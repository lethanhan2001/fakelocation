import React from "react";
import bg from "../images/thinkdiff.jpg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Reset = () => {

  const [email, setEmail] = useState("");
  const username = "resetPassword"
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://14.225.7.221:3005/resetpass", {
        email: email,
        user_name: username,
      });
      console.log(email)
      console.log(username)
      console.log(res.data);
      toast.success("Lấy lại mật khẩu thành công");
      setIsSuccess(true)
      navigate("/Login");
    } catch (error) {
      toast.error(error.message);
      console.log("Lỗi", error);
    }
  };

  return (
    <>
      <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center  mx-auto items-center vh-100">
          <p className="text-2xl font-semibold text-white">Forgot Password</p>
          {isSuccess && <div className="w-1/5 text-center">
            <p className="text-md font-semibold text-white">
              A link with code to reset your password has been sent to your
              email.
            </p>
          </div>}

          <form className="w-full mx-auto text-center">
            <div className="w-1/5 mx-auto">
              <input
                style={{ color: "white" }}
                className=" w-full bg-[rgba(0,0,0,0)] border-b-2 border-t-0 border-r-0 border-l-0 outline-none border-b-white py-2 "
                type="email"
                id="email"
                required
                autoComplete="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            {/* <div className="w-1/5 mx-auto">
              <input
                style={{ color: "white" }}
                className=" w-full bg-[rgba(0,0,0,0)] border-b-2 border-t-0 border-r-0 border-l-0 outline-none border-b-white py-2 "
                type="text"
                id="username"
                required
                autoComplete="username"
                placeholder="Username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div> */}
            <button
              className="bg-white mt-8 w-[250px] py-2 font-bold cursor-pointer rounded-3xl"
              // type="submit"
              onClick={handleSubmit}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reset;
