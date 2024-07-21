import React from "react";
import { Link } from "react-router-dom";

const Collaboration = ({
  imgs,
  parentImage,
  title,
  condition,
  parentImg2,
  subtitle,
  parentImgmob,
}) => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto px-3 sm:px-3 md:px-0 mt-10 ">
        <h1 className="text-white font-regular text-2xl pb-8 px-0  sm:px-3 lg:px-0 ">
          {title}
        </h1>

        <div
          className={`sm:grid grid-cols-5 sm:grid-cols-9 flex no-scrollbar  overflow-x-scroll md:overflow-hidden    ${
            condition ? "gap-5" : "gap-0"
          }`}
          style={{ margin: "5px" }}
        >
          <div className="hidden sm:block "></div>
          {imgs.map((img, index) => (
            <div className="flex-shrink-0 w-[100px]" key={index}>
              <Link to={"/products"}>
                <img
                  src={img.img}
                  className="rounded-md flex-shrink-0 "
                  alt=""
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap mt-5 sm:mt-8 px-0  sm:px-3 lg:px-0 ">
          {!condition ? (
            parentImage.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] md:w-[49.5] mb-1 sm:mb-0"
              >
                <img src={item.Img} className="rounded-md" alt="" />
              </div>
            ))
          ) : (
            <>
              <div>
                <h1 className="text-white font-regular text-2xl pb-5 ">
                  {subtitle}
                </h1>
                <div className="w-full">
                  <img
                    src={parentImg2}
                    className="rounded-md hidden sm:block"
                    alt=""
                  />
                  <img
                    src={parentImgmob}
                    className="rounded-md sm:hidden block"
                    alt=""
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Collaboration;
