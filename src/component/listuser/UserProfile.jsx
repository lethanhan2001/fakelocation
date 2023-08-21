import React from "react";
import { more, newuser } from "../utils/data";

const UserProfile = () => {
  return (
    <>
      <div className=" h-auto px-6 mx-2 py-2">
        <div className="flex justify-between items-center">
          <div className="bg-white w-full rounded-[25px] flex justify-between items-center p-2">
            <div className="flex items-center">
              <img className="rounded-full" src={newuser} alt="" />
              <div className="">
                <div className="ml-4 flex items-center">
                  <div className="font-semibold">Username</div>
                  <div className="ml-4">Has commeted on Linda’s photos</div>
                </div>
                <div className="ml-4">
                  Lorem ipsum dolor sit amet consectetur. Gravida tempor velit
                  eget mollis.orem <br /> ipsum dolor sit amet consectetur.
                </div>
              </div>
            </div>
            <div className="flex items-center ">
              <div className="font-semibold pr-3 text-xl">3m</div>
              <div className="font-semibold pr-3 text-xl">
                <img src={more} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
