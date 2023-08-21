import React from "react";
import { anh1, you2, you3 } from "../utils/data";

const YourPicture = ({ className }) => {
  return (
    <>
      <div className="flex justify-between items-center px-6 mt-[13px]">
        <div className={className}>
          <img src={anh1} alt="" />
          <p className="text-center text-2xl tracking-[0.8px] mt-2 font-semibold">
            Paris, 12/10/2023
          </p>
        </div>
        <div className={className}>
          <img src={you2} alt="" />
          <p className="text-center text-2xl tracking-[0.8px] mt-2 font-semibold">
            Paris, 12/10/2023
          </p>
        </div>
        <div className={className}>
          <img src={you3} alt="" />
          <p className="text-center ml-6 text-2xl tracking-[0.8px] mt-2 font-semibold">
            Paris, 12/10/2023
          </p>
        </div>
      </div>
    </>
  );
};

export default YourPicture;
