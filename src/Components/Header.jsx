import React, { useEffect, useRef } from "react";
import { Menu, MapPin, LogOut } from "lucide-react";
import { useDebounce } from "use-debounce";
import { ShoppingCart, CircleUser } from "lucide-react";
import Login from "./Login";
import { useContext } from "react";
import { UserContext } from "../context/CurrentUserContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Search } from "lucide-react";

import { useState } from "react";
import { useSelector } from "react-redux";
import { instance } from "../utils/instense";
const Header = ({ sidebarRef }) => {
  const [isopen, setIsopen] = React.useState(false);
  const { currentUser } = useContext(UserContext);

  const cartProduct = useSelector((value) => value.cartSlice.cart);

  const handleLogout = () => {
    let currentUserLogin = localStorage.getItem("login-user");
    if (currentUserLogin) {
      localStorage.removeItem("login-user");
      toast.success("logout successfully !");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      console.log("no user");
    }
  };
  // search data
  const [input, setInput] = useState("");
  const [filterData, setFilterData] = useState([]);

  const [debouncedValue] = useDebounce(input, 500);
  useEffect(() => {
    const fetchData = async () => {
      if (debouncedValue) {
        try {
          const response = await instance.get(`/search?q=${input}`);
          setFilterData(response.data.products);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [debouncedValue]);

  const handleSidebar = () => {
    sidebarRef.current.style.transform = "translateX(0%)";
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <Login isopen={isopen} setIsopen={setIsopen} />
      <nav className="w-full bg-black py-2 sticky top-0 z-40 ">
        <div className="max-w-screen-xl mx-auto py-3 md:px-20 px-4">
          <div className="wrapper flex gap-4 items-center justify-between w-full">
            <div className="flex items-center flex-row-reverse md:flex-row gap-4">
              <Link to={"/"}>
                {" "}
                <img
                  className="w-52 sm:w-32 md:block flex-shrink-0"
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
                  alt=""
                />
              </Link>
              <Menu
                color="white"
                width={100}
                className="sm:hidden block"
                onClick={handleSidebar}
              />
            </div>
            <div className="max-w-screen-md w-full relative ">
              <input
                type="text"
                id="small-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="block  mx-auto max-w-screen-sm outline-none focus:border-0 w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-100  dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md"
                placeholder="Search item.."
              />

              <Search className="absolute right-2 size-5  sm:right-20  top-3 smtop-2" />
            </div>
            <div className="flex gap-6 items-center">
              {currentUser.username ? (
                <p className="text-white text-sm sm:block hidden whitespace-nowrap font-medium ">
                  Hey,{" "}
                  <span className="capitalize"> {currentUser.username}</span>
                </p>
              ) : null}

              {!currentUser && (
                <p className="text-white" onClick={() => setIsopen(!isopen)}>
                  Login/SignUp
                </p>
              )}

              <div className="flex relative">
                <Link to={"/cart"} className="sm:block hidden">
                  <ShoppingCart
                    color="white"
                    width={24}
                    strokeWidth={2}
                    className="cursor-pointer lucide-cart"
                  />
                </Link>

                {cartProduct.length > 0 && (
                  <div className="pointer-events-none w-6 h-6 hidden  rounded-full bg-red-400 absolute -right-2 -top-3 sm:flex justify-center items-center">
                    <span className="p-1 text-white">{cartProduct.length}</span>
                  </div>
                )}
              </div>
              {currentUser.email && currentUser?.username ? (
                <LogOut
                  className="cursor-pointer hidden sm:block"
                  onClick={handleLogout}
                  color="white"
                  width={24}
                  strokeWidth={2}
                />
              ) : (
                <p
                  className="text-white cursor-pointer hidden sm:block"
                  onClick={() => setIsopen(!isopen)}
                >
                  Login/Signup
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="product-div w-[80%]  md:max-w-screen-sm md:w-full  max-h-72 overflow-y-auto  bg-zinc-200 absolute top-full left-[47.8%] right-1/2 -translate-x-1/2 rounded-md ">
          {input && (
            <>
              {filterData.length > 0 ? (
                filterData.map((item, key) => (
                  <h2 className="px-4 py-1" key={key}>
                    <Link
                      to={`/products/${item.id}`}
                      onClick={() => setInput("")}
                    >
                      <button
                        type="button"
                        class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-800 border-b border-gray-200 dark:border-gray-400 gap-3"
                        data-accordion-target="#accordion-flush-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-flush-body-1"
                      >
                        <div className="flex gap-3 items-center">
                          <div className="w-14 h-14 ">
                            <img
                              src={item.thumbnail}
                              className="h-full rounded-md  w-full object-cover"
                              alt=""
                            />
                          </div>
                          <div className="text-start">
                            <span className="block">{item.title}</span>
                            <small className="block">{item.description}</small>
                          </div>
                        </div>
                      </button>
                    </Link>
                  </h2>
                ))
              ) : (
                <h2 className="text-xl my-3 text-center">No Data Found</h2>
              )}
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
