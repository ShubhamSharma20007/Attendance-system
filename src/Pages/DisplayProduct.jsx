import React, { useEffect, useState, useContext } from "react";
import SingleProductCard from "../Components/SingleProductCard";
import { ApiCon } from "../context/ApiContext";
import { instance } from "../utils/instense";
import { useDebounce } from "use-debounce";
import Loading from "../Components/Loading";

const DisplayProduct = () => {
  const { products } = useContext(ApiCon);
  const [loader, setLoader] = useState(false);
  const [selectVal, setSelectVal] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    let sortedArray = [...products];
    if (selectVal === "Low to high") {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (selectVal === "High to low") {
      sortedArray.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sortedArray);
  }, [products, selectVal]);

  // Search Functionality
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [debouncedSearch] = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      setLoader(true);
      instance
        .get(`/search?q=${debouncedSearch}`)
        .then((res) => {
          setFilteredProducts(res.data.products);
          setLoader(false);
        })
        .catch((err) => {
          console.log(err);
          setLoader(false);
        });
    } else {
      setFilteredProducts([]);
    }
  }, [debouncedSearch]);

  return (
    <>
      {loader && <Loading />}
      <div className="my-3">
        <div className="block sm:flex gap-5 sm:pb-4 p-4 ">
          <h1 className="text-3xl my-2 sm:my-0 font-semibold sm:px-8 text-zinc-100">
            All Product's
          </h1>
          <div>
            <select
              id="countries"
              value={selectVal}
              onChange={(e) => setSelectVal(e.target.value)}
              className="bg-gray-50 my-2 sm:my-0 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled>
                Item sort
              </option>
              <option value="Low to high">Low to high</option>
              <option value="High to low">High to low</option>
            </select>
          </div>
          <div>
            <div className="relative">
              <input
                value={search}
                onInput={(e) => setSearch(e.target.value)}
                type="search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by name..."
              />
              <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter">
                <svg
                  version="1.1"
                  className="h-4 text-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 52.966 52.966"
                  style={{ enableBackground: "new 0 0 52.966 52.966" }}
                  xmlSpace="preserve"
                >
                  <path
                    d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21
  c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
  C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
  S32.459,40,21.983,40z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <hr className="sm:mx-10 mx-3 bg-zinc-500" />
      </div>
      <div className="flex flex-wrap gap-3 md:gap-2 justify-center">
        {search && search.length > 0 ? (
          filteredProducts.length === 0 ? (
            <SingleProductCard text="No Product Found" />
          ) : (
            filteredProducts.map((item, index) => (
              <SingleProductCard key={index} item={item} />
            ))
          )
        ) : (
          sortedProducts.map((item, index) => (
            <SingleProductCard key={index} item={item} />
          ))
        )}
      </div>
    </>
  );
};

export default DisplayProduct;
