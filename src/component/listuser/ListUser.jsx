import React from "react";
import { newuser } from "../utils/data";

const ListUser = () => {
  return (
    <>
      <div className=" h-auto px-2 mx-2 py-2">
        <div className="flex justify-between items-center">
          <div className="bg-white w-[49.5%] rounded-[35px] flex justify-between items-center p-2">
            <div className="flex items-center">
              <img className="rounded-full" src={newuser} alt="" />
              <div className="ml-2">
                <div className="font-semibold">Username</div>
                <div>Has just created account</div>
              </div>
            </div>
            <div className="time">
              <div className="font-semibold pr-3 text-xl">12/10/2023</div>
            </div>
          </div>
          <div className="bg-white w-[49.5%] rounded-[35px] flex justify-between items-center p-2">
            <div className="flex items-center">
              <img className="rounded-full" src={newuser} alt="" />
              <div className="ml-2">
                <div className="font-semibold">Username</div>
                <div>Has just created account</div>
              </div>
            </div>
            <div className="time">
              <div className="font-semibold pr-3 text-xl">12/10/2023</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListUser;
