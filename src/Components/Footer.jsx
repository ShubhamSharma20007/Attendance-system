import React from "react";
import { ArrowRight } from "lucide-react";
import { Youtube, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Toaster, toast } from "react-hot-toast";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Footer = () => {
  const [open, setOpen] = React.useState(0);
  const handleSubmitFooterMail = (e) => {
    toast.success("Mail Sent Successfully");
  };
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-[#1D1D1D] w-full mt-3">
        <div className="max-w-screen-lg mx-auto py-10">
          <div className="block sm:flex">
            <div className="w-full sm:w-[33%] py-4 sm:px-10 px-5 sm:border-r-2">
              <p className="font-medium text-zinc-300">CONNECT WITH US</p>
              <div className="relative">
                <form
                  action="https://formsubmit.co/shubhamsharma20007@gmail.com"
                  method="POST"
                >
                  <input
                    type="text"
                    hidden
                    name="text"
                    value={`this side shubham if do you want to connect me on my linkedin  https://www.linkedin.com/in/shubham-sharma-8a625a237/`}
                  />
                  <input
                    type="email"
                    name="email"
                    className="w-full p-2 mt-3 outline-none rounded-md pr-10"
                    placeholder="Enter Email"
                    id=""
                    required
                  />
                  <button type="submit" className="absolute right-2 top-[21px]">
                    <ArrowRight color="gray" />
                  </button>
                </form>
                <div className="flex gap-4  my-6">
                  <Youtube color="white" size={26} />
                  <Facebook color="white" size={26} />

                  <a
                    title="Instagram"
                    target="__blank"
                    rel="noreferrer"
                    className="text-white"
                    href="https://www.instagram.com/shubx.__/"
                  >
                    <Instagram color="white" size={26} />
                  </a>
                  <a
                    target="__blank"
                    rel="noreferrer"
                    title="linkedin"
                    href={
                      "https://www.linkedin.com/in/shubham-sharma-8a625a237/"
                    }
                  >
                    <Linkedin color="white" size={26} />
                  </a>
                  <Twitter color="white" size={26} />
                </div>
                <p className="text-zinc-300 text-sm font-medium">
                  © Copyright 2023 Croma. All rights reserved
                </p>
              </div>
            </div>
            <div className="w-[33%] py-4 px-10 border-r-2 hidden md:block ">
              <p className="font-medium text-zinc-300">USEFULL LINKS </p>
              <div className="relative">
                <div className="flex gap-5 mt-3 w-full text-zinc-300 justify-between font-medium items-start">
                  <a className="text-sm w-1/2 hover:text-cyan-300   " href="#">
                    About Croma
                  </a>
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Franchise
                  </a>
                </div>
                <div className="flex gap-5 mt-3 w-full text-zinc-300 justify-between font-medium">
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Help And Support
                  </a>
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Site Map
                  </a>
                </div>
                <div className="flex  gap-5 mt-3 w-ful text-zinc-300 justify-between font-medium">
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    FAQ's
                  </a>
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Careers At Croma
                  </a>
                </div>
                <div className="flex  gap-5 mt-3 w-full text-zinc-300 justify-between font-medium">
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Buying Guide
                  </a>
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Terms Of Use
                  </a>
                </div>
                <div className="flex gap-5 mt-3 w-full text-zinc-300 justify-between font-medium">
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Return Policy
                  </a>
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Disclaimer
                  </a>
                </div>
                <div className="flex gap-5 mt-3 w-full text-zinc-300 justify-between font-medium">
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    B2B Orders
                  </a>
                  <a className="text-sm w-1/2 hover:text-cyan-300 " href="#">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[33%] py-4 px-10 border-r-2 hidden md:block  ">
              <p className="font-medium text-zinc-300">PRODUCTS </p>
              <div className="relative">
                <div className="flex gap-5 mt-3 w-full text-zinc-300 justify-between font-medium items-start">
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Accessories
                  </a>
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Personal Care
                  </a>
                </div>
                <div className="flex gap-5 mt-3 w-full text-zinc-300 justify-between font-medium">
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Home Appliances
                  </a>
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Cameras
                  </a>
                </div>
                <div className="flex  gap-5 mt-3 w-ful text-zinc-300 justify-between font-medium">
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Computers
                  </a>
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Gaming
                  </a>
                </div>
                <div className="flex  gap-5 mt-3 w-full text-zinc-300 justify-between font-medium">
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Audio & Video
                  </a>
                  <a className="text-sm w-1/2 hover:text-cyan-300" href="#">
                    Accessories
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:hidden px-5  text-zinc-300 ">
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="font-bold"
                >
                  USEFULL LINKS
                </AccordionHeader>
                <AccordionBody>
                  <div className="w-full py-4 px-5  ">
                    <p className="font-medium text-zinc-300">USEFULL LINKS </p>
                    <div className="relative">
                      <div className="flex gap-5 mt-3 w-full text-zinc-300 justify-between font-medium items-start">
                        <a className="text-sm w-1/2" href="#">
                          About Croma
                        </a>
                        <a className="text-sm w-1/2" href="#">
                          Franchise
                        </a>
                      </div>
                      <div className="flex gap-5 mt-3 w-full text-zinc-300 justify-between font-medium">
                        <a className="text-sm w-1/2" href="#">
                          Help And Support
                        </a>
                        <a className="text-sm w-1/2" href="#">
                          Site Map
                        </a>
                      </div>
                      <div className="flex  gap-5 mt-3 w-ful text-zinc-300 justify-between font-medium">
                        <a className="text-sm w-1/2" href="#">
                          FAQ's
                        </a>
                        <a className="text-sm w-1/2" href="#">
                          Careers At Croma
                        </a>
                      </div>
                      <div className="flex  gap-5 mt-3 w-full text-zinc-300 justify-between font-medium">
                        <a className="text-sm w-1/2" href="#">
                          Buying Guide
                        </a>
                        <a className="text-sm w-1/2" href="#">
                          Terms Of Use
                        </a>
                      </div>
                      <div className="flex gap-5 mt-3 w-full text-zinc-300 justify-between font-medium">
                        <a className="text-sm w-1/2" href="#">
                          Return Policy
                        </a>
                        <a className="text-sm w-1/2" href="#">
                          Disclaimer
                        </a>
                      </div>
                      <div className="flex gap-5 mt-3 w-full text-zinc-300 justify-between font-medium">
                        <a className="text-sm w-1/2" href="#">
                          B2B Orders
                        </a>
                        <a className="text-sm w-1/2 " href="#">
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="font-bold"
                >
                  Products
                </AccordionHeader>
                <AccordionBody>
                  <div className="w-full py-4 px-5  ">
                    <p className="font-medium text-zinc-300">Products </p>
                    <div className="relative">
                      <div className="flex gap-5 mt-3 w-full text-zinc-300 justify-between font-medium items-start">
                        <a className="text-sm w-1/2  " href="#">
                          Televisions
                        </a>
                        <a className="text-sm w-1/2" href="#">
                          Personal Care
                        </a>
                      </div>
                      <div className="flex gap-5 mt-3 w-full text-zinc-300 justify-between font-medium">
                        <a className="text-sm w-1/2" href="#">
                          Home Appliances
                        </a>
                        <a className="text-sm w-1/2" href="#">
                          Cameras
                        </a>
                      </div>
                      <div className="flex  gap-5 mt-3 w-ful text-zinc-300 justify-between font-medium">
                        <a className="text-sm w-1/2" href="#">
                          Computers & Tablets
                        </a>
                        <a className="text-sm w-1/2" href="#">
                          Gaming
                        </a>
                      </div>
                      <div className="flex  gap-5 mt-3 w-full text-zinc-300 justify-between font-medium">
                        <a className="text-sm w-1/2" href="#">
                          Audio & Video
                        </a>
                        <a className="text-sm w-1/2" href="#">
                          Accessories
                        </a>
                      </div>
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
