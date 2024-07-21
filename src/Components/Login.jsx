import React, { useRef } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = ({ isopen, setIsopen }) => {
  const targetRef = useRef(null);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [registerVal, setRegisterVal] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginVal, setLoginVal] = useState({
    email: "",
    password: "",
  });

  const handleBackground = (e) => {
    isopen && !targetRef.current.contains(e.target) ? setIsopen(false) : null;
  };
  const handleLoginForm = (e) => {
    e.preventDefault();
    const { email, password } = loginVal;
    if (!email || !password) {
      return toast.error("All fields are required");
    }
    const localStorageData = JSON.parse(localStorage.getItem("register"));
    if (localStorageData?.length > 0) {
      const userData = localStorageData.find(
        (user) => user.email === email && user.password === password
      );

      if (userData) {
        localStorage.setItem("login-user", JSON.stringify(userData));
        setLoginVal({ email: "", password: "" });
        toast.success("Login Successfully");
        navigate("/");
        setTimeout(() => {
          setIsopen(false);
          window.location.reload();
        }, 2000);
      } else {
        toast.error("Invalid email or password");
      }
    } else {
      toast.error("User not exists");
    }
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const { password, confirmPassword, email, username } = registerVal;
    if (!password || !confirmPassword || !email || !username) {
      return toast.error("All fields are required");
    }

    if (password !== confirmPassword) {
      return toast.error("Password not match");
    }
    if (password.length < 6) {
      return toast.error("Password must be 6 character long");
    }
    if (username.length < 3) {
      return toast.error("Username must be 3 character long");
    }
    if (email.length < 3 || !email.includes("@")) {
      return toast.error("Email is not valid");
    }
    let localstorage = JSON.parse(localStorage.getItem("register")) || [];
    localstorage.push(registerVal);
    localStorage.setItem("register", JSON.stringify(localstorage));
    setRegisterVal({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    toast.success("Account created successfully !");
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  return (
    <>
      <Toaster position="right-top" />
      <div
        className={`${
          isopen ? "w-full h-screen fixed bg-mycolor z-[100] " : ""
        }`}
        onClick={(e) => handleBackground(e)}
      >
        <div
          ref={targetRef}
          className={` fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-40 mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 transition-opacity duration-800 ${
            isopen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {!show ? (
            <div className="w-full login">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-900">
                  Sign in
                </h1>
                <p className="mt-2 text-gray-500">
                  Sign in below to access your account
                </p>
              </div>
              <div className="mt-5">
                <form action="" onSubmit={(e) => handleLoginForm(e)}>
                  <div className="relative mt-6">
                    <input
                      type="email"
                      name="login-email"
                      value={loginVal.email}
                      onChange={(e) =>
                        setLoginVal({ ...loginVal, email: e.target.value })
                      }
                      placeholder="Email Address"
                      className="peer mt-1 w-full  border-b-2 text-zinc-800 border-gray-300 bg-white px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      autoComplete="NA"
                    />
                    <label
                      htmlFor="login-email"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <input
                      type="password"
                      name="login-password"
                      value={loginVal.password}
                      onChange={(e) =>
                        setLoginVal({ ...loginVal, password: e.target.value })
                      }
                      placeholder="Password"
                      className="peer peer mt-1 w-full border-b-2 text-zinc-800 border-gray-300 bg-white px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                    <label
                      htmlFor="login-password"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Password
                    </label>
                  </div>
                  <div className="my-6">
                    <button
                      type="submit"
                      className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                    >
                      Sign in
                    </button>
                  </div>
                  <p
                    className="text-center text-sm cursor-pointer  text-gray-500"
                    onClick={() => setShow(!show)}
                  >
                    Don't have an account yet?
                    <p className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
                      Sign up
                    </p>
                    .
                  </p>
                </form>
              </div>
            </div>
          ) : (
            <div className="w-full signup">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-900">
                  Sign Up
                </h1>
                <p className="mt-2 text-gray-500">
                  Sign up users to fill in their details
                </p>
              </div>
              <div className="mt-5">
                <form action="" onSubmit={(e) => handleRegisterForm(e)}>
                  <div className="relative mt-6">
                    <input
                      type="text"
                      name="username"
                      value={registerVal.username}
                      onChange={(e) =>
                        setRegisterVal({
                          ...registerVal,
                          username: e.target.value,
                        })
                      }
                      id="username"
                      placeholder="Enter name"
                      className="peer mt-1 w-full border-b-2 text-zinc-800 border-gray-300 bg-white px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      autoComplete="NA"
                    />
                    <label
                      htmlFor="username"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Username
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <input
                      type="email"
                      name="email"
                      value={registerVal.email}
                      onChange={(e) =>
                        setRegisterVal({
                          ...registerVal,
                          email: e.target.value,
                        })
                      }
                      id="email"
                      placeholder="Email Address"
                      className="peer mt-1 w-full border-b-2 text-zinc-800 border-gray-300 bg-white px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      autoComplete="NA"
                    />
                    <label
                      htmlFor="email"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <input
                      type="text"
                      name="password"
                      value={registerVal.password}
                      onChange={(e) =>
                        setRegisterVal({
                          ...registerVal,
                          password: e.target.value,
                        })
                      }
                      id="password"
                      placeholder="Password"
                      className="peer peer mt-1 w-full border-b-2 text-zinc-800 border-gray-300 bg-white px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                    <label
                      htmlFor="password"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <input
                      type="password"
                      name="con-password"
                      value={registerVal.confirmPassword}
                      onChange={(e) =>
                        setRegisterVal({
                          ...registerVal,
                          confirmPassword: e.target.value,
                        })
                      }
                      id="con-password"
                      placeholder="Confirm password"
                      className="peer peer mt-1 w-full border-b-2 text-zinc-800 border-gray-300 bg-white px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                    <label
                      htmlFor="con-password"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="my-6">
                    <button
                      type="submit"
                      className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                    >
                      Sign Up
                    </button>
                  </div>
                  <p
                    className=" cursor-pointer  text-center  text-sm text-gray-500"
                    onClick={() => setShow(!show)}
                  >
                    Already have a account?
                    <p className=" cursor-pointer ml-1 font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
                      Sign In
                    </p>
                    .
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
