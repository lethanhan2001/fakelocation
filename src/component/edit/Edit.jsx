import React from "react";
import Background from "../Background";
import Header from "../Header";
import {
  addbg,
  deletebg,
  edit,
  location,
  removebg,
  savebg,
} from "../utils/data";

const Edit = () => {
  return (
    <>
      <Background>
        <Header />
        <div className="relative">
          <img
            className="w-[1164px] h-[512px] bg-cover mx-auto mt-6"
            src={edit}
            alt=""
          />
        </div>

        <div className="flex justify-center items-center absolute bottom-6 left-0 right-0">
          <img src={removebg} className="mx-3" alt="" />
          <img src={savebg} className="mx-3" alt="" />
          <img src={addbg} className="mx-3" alt="" />
          <img src={location} className="mx-3" alt="" />
          <img src={deletebg} className="mx-3" alt="" />
        </div>
      </Background>
    </>
  );
};

export default Edit;
