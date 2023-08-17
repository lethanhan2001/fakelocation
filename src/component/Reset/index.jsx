import React from "react";
import bg from "../images/thinkdiff.jpg";

const Reset = () => {
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
          <div className="w-1/5 text-center">
            <p className="text-md font-semibold text-white">
              A link with code to reset your password has been sent to your
              email.
            </p>
          </div>

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
              />
            </div>
            <button
              className="bg-white mt-8 w-[250px] py-2 font-bold cursor-pointer rounded-3xl"
              type="submit"
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
