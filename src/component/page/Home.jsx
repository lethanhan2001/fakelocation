import React from "react";
import Header from "../Header";
import Picture from "../Picture";
import Background from "../Background";
const Home = () => {
  return (
    <>
      <Background>
        <div className=" vh-100">
          <Header />
          <Picture />
        </div>
      </Background>
    </>
  );
};

export default Home;
