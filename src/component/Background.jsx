import React from "react";
import bg from "./images/thinkdiff.jpg";

const Background = ({ children }) => {
  return (
    <>
      <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="fixed overflow-y-scroll top-0 left-0 right-0 bottom-0 w-full h-full"
      >
        {children}
      </div>
    </>
  );
};

export default Background;
