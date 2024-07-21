import React from "react";
import "../../public/css/loading.css";
const Loading = () => {
  return (
    <div className="wrapper h-screen w-full absolute top-0 left-0 flex justify-center bg-zinc-900 items-center z-[151]">
      <div className="loader  ">
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
        <div className="bar4" />
        <div className="bar5" />
        <div className="bar6" />
        <div className="bar7" />
        <div className="bar8" />
        <div className="bar9" />
        <div className="bar10" />
        <div className="bar11" />
        <div className="bar12" />
      </div>
    </div>
  );
};

export default Loading;
