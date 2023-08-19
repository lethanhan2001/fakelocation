import React from "react";
import { mega, frame, user, add } from "./utils/data";
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-[7.5%]">
        <div className="none"></div>
        <div className="flex items-center justify-center ml-14 mt-5">
          <img className="mb-2 ml-20" src={frame} alt="" />
          <img className="ml-3" src={mega} alt="" />
        </div>
        <div className="flex items-center mt-11">
          <img
            className="mr-5 bg-[#F65C1A] rounded-full p-2"
            src={add}
            alt=""
          />
          <img src={user} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
