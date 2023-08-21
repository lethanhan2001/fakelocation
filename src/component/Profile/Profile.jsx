import React from "react";
import Background from "../Background";
import Header from "../Header";
import { user } from "../utils/data";
import YourPicture from "../pictures/YourPicture";
import UserProfile from "../listuser/UserProfile";
const Profile = () => {
  return (
    <>
      <Background>
        <Header />

        <div className="mt-12 px-[8.2%] mx-auto">
          <div className="bg-[#929CF3]  w-[1200px] pb-12 mx-auto rounded-[32px] h-[170px]">
            <div className="flex items-center mx-auto h-[170px] px-24">
              <img className="w-24 h-24 object-cover" src={user} alt="" />
              <div className="ml-24 text-center text-white font-semibold text-2xl">
                <span>120</span>
                <p>Pictures</p>
              </div>
              <div className="ml-24 text-center text-white font-semibold text-2xl">
                <span>860</span>
                <p>Comments</p>
              </div>
              <div className="ml-24 text-center text-white font-semibold text-2xl">
                <span>3.2k</span>
                <p>Views</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[rgba(255,255,255,0.8)] mt-8 w-[1204px] pb-12 mx-auto rounded-3xl h-auto">
          <div className="flex justify-between items-center pt-[80px]">
            <YourPicture className="mx-2" />
          </div>
          <div className="flex justify-between items-center pt-[80px]">
            <YourPicture className="mx-2" />
          </div>
          <div className="flex justify-between items-center pt-[80px]">
            <YourPicture className="mx-2" />
          </div>
          <div className="flex justify-between items-center pt-[80px]">
            <YourPicture className="mx-2" />
          </div>
          <div className="flex justify-between items-center pt-[80px]">
            <YourPicture className="mx-2" />
          </div>

          <div className="flex justify-between items-center mt-24 px-6 pt-[80px]">
            <p className="text-2xl font-semibold  tracking-[1px]">Comments</p>
            <div className="flex items-center">
              <p className="text-base font-semibold mr-3 tracking-[.6px]">
                View all
              </p>
            </div>
          </div>
          <div className="bg-[#baadad] mx-3 mt-2 rounded-xl py-3">
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
          </div>
        </div>
      </Background>
    </>
  );
};

export default Profile;
