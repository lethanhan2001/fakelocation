import React from "react";
import { anh1, anh2, anh3, more, pagoda, right } from "./utils/data";
import YourPicture from "./pictures/YourPicture";
import Review from "./review/Review";
import ListUser from "./listuser/ListUser";
const Picture = () => {
  return (
    <>
      <div className="mt-12 px-[8.2%] mx-auto">
        <div className="bg-[rgba(255,255,255,0.8)] w-[1204px] pb-12 mx-auto rounded-3xl h-auto">
          <div className="flex justify-between items-center px-6 pt-[80px]">
            <p className="text-2xl font-semibold  tracking-[1px]">
              Recent Pictures
            </p>
            <p className="text-base font-semibold">View all</p>
          </div>
          <div className="mx-auto w-[1160px] pt-1">
            <img className="w-full h-[652.5px]" src={pagoda} alt="" />

            <div className="flex relative justify-center items-center mt-[-64px] ">
              <img className="w-[380px] ml-16" src={anh1} alt="" />
              <img className="w-[379px] ml-3" src={anh2} alt="" />
              <img className="ml-4 " src={anh3} alt="" />
              <img
                className="absolute right-3 bg-[#5C6AED] rounded-full p-2"
                src={right}
                alt=""
              />
            </div>
          </div>
          <div className="">
            <div className="flex justify-between items-center mt-24 px-6 pt-[80px]">
              <p className="text-2xl font-semibold  tracking-[1px]">
                Your Pictures
              </p>
              <div className="flex items-center">
                <p className="text-base font-semibold mr-3 tracking-[.6px]">
                  View all
                </p>
                <img className="mb-3" src={more} alt="" />
              </div>
            </div>
            <YourPicture />
            <YourPicture />
            <YourPicture />
            <YourPicture />
            <YourPicture />
          </div>

          <div className="-mt-16">
            <div className="flex justify-between items-center mt-24 px-6 pt-[80px]">
              <p className="text-2xl font-semibold  tracking-[1px]">Review</p>
              <div className="flex items-center">
                <p className="text-base font-semibold mr-3 tracking-[.6px]">
                  View all
                </p>
                <img className="mb-3" src={more} alt="" />
              </div>
            </div>

            <Review />
            <Review />
            <Review />
            <Review />
          </div>

          <div className="newuser">
            <div className="flex justify-between items-center mt-24 px-6 pt-[80px]">
              <p className="text-2xl font-semibold  tracking-[1px]">New User</p>
              <div className="flex items-center">
                <p className="text-base font-semibold mr-3 tracking-[.6px]">
                  View all
                </p>
                <img className="mb-3" src={more} alt="" />
              </div>
            </div>
            <div className="bg-[#baadad] mx-3 mt-2 rounded-xl py-3">
              <ListUser />
              <ListUser />
              <ListUser />
              <ListUser />
              <ListUser />
              <ListUser />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Picture;
