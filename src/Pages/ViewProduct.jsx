import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../utils/instense";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cartSlice";
import { Toaster, toast } from "react-hot-toast";
const ViewProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    instance
      .get(`/${params.id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params, data]);

  return (
    <>
      <div className="bg-[#191919]">
        <div className="pt-6">
          <div className="mx-auto  mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div
              className={`${
                data.images && data.images[0] ? "visible" : "hidden"
              }  aspect-h-2 aspect-w-3 overflow-hidden rounded-lg `}
            >
              <img
                src={data.images && data?.images[0]}
                alt="Two each of gray, white, and black shirts laying flat."
                className="h-full w-full object-cover object-center rounded-md"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div
                className={`${
                  data.images && data.images[1] ? "visible" : "hidden"
                } aspect-h-2 aspect-w-3 overflow-hidden rounded-lg `}
              >
                <img
                  src={data.images && data?.images[1]}
                  alt="Model wearing plain black basic tee."
                  className="h-full w-full object-cotaine object-center rounded-md"
                />
              </div>
              <div
                className={`${
                  data.images && data.images[2] ? "visible" : "hidden"
                } aspect-h-2 aspect-w-3 overflow-hidden rounded-lg`}
              >
                <img
                  src={data.images && data?.images[2]}
                  alt="Model wearing plain gray basic tee."
                  className="h-full w-full object-cotain object-center rounded-md"
                />
              </div>
            </div>
            <div
              className={`${
                data.images && data.images[3] ? "visible" : "hidden"
              } aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg`}
            >
              <img
                src={data.images && data?.images[3]}
                alt="Model wearing plain white basic tee."
                className="h-full w-full object-cover object-center rounded-md"
              />
            </div>
          </div>
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-200 sm:text-3xl">
                {data?.title}
              </h1>
            </div>
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-zinc-200">
                ₹{data?.price}
              </p>
              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {/* Active: "text-zinc-200", Default: "text-gray-200" */}
                    <svg
                      className="text-yellow-500 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="text-yellow-500 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="text-yellow-500 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="text-yellow-500 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="text-gray-200 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="sr-only">{data?.rating} out of 5 stars</p>
                  <a
                    href="#"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {data?.stock} reviews
                  </a>
                </div>
              </div>
              <form className="mt-10">
                <button
                  onClick={() => {
                    toast.success("Added to cart");
                    dispatch(addCart(data));
                  }}
                  type="button"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
              </form>
            </div>
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-zinc-200">{data?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
