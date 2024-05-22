import React from "react";
import NavBar from "../components/NavBar";
import Image from "next/image";

const roadmap = () => {
  return (
    <div className="bg-background flex flex-col justify-center items-center">
      <NavBar />
      <Image
        src="/assets/roadmap.png"
        alt="roadmap"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default roadmap;
