import React from "react";
import { useSelector } from "react-redux";
import { CircleX } from "lucide-react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { X } from "lucide-react";
import { removeCart } from "../redux/cartSlice";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { resetCart } from "../redux/cartSlice";
import { UserContext } from "../context/CurrentUserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const CartTable = () => {
  const { currentUser } = useContext(UserContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProduct = useSelector((value) => value.cartSlice.cart);

  const handleRemoveItem = (e) => {
    toast.success("item removed");
    return dispatch(removeCart(e));
  };

  // handling form
  const [formInput, setformInput] = useState({
    acNum: "",
    pin: "",
  });

  const handlePaymentForm = (e) => {
    e.preventDefault();
    const { acNum, pin } = formInput;
    if (acNum === "" || pin === "") {
      toast.error("All fields are required");
      return;
    } else if (acNum.length < 10) {
      toast.error("account should be 10 digits");
      return;
    } else if (pin.length < 6) {
      toast.error("pin should be 6 digits");
      return;
    }
    toast.success("payment successfull");
    setTimeout(() => {
      dispatch(resetCart());
      navigate("/");
    }, 2000);
  };

  function handlePopup() {
    if (currentUser.email == undefined) {
      toast.error("Please login first");
      return;
    } else {
      document.getElementById("my_modal_1").showModal();
    }
  }

  return (
    <>
      <div class="relative overflow-x-auto m-3 max-h-[70vh] overflow-y-auto">
        {cartProduct.length > 0 ? (
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3"
                  style={{ borderRadius: "10px 0 0 0" }}
                >
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Qty
                </th>
                <th scope="col" class="px-6 py-3 ">
                  Price
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 "
                  style={{ borderRadius: "0px 10px 0 0" }}
                >
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {cartProduct.map(({ title, price, id }) => (
                <>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {title}
                    </th>
                    <td class="px-6 py-4">1</td>
                    <td class="px-6 py-4">₹{price}</td>
                    <td class="px-6 py-4" onClick={() => handleRemoveItem(id)}>
                      <CircleX />
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
            <tfoot>
              <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base">
                  Total
                </th>
                <td class="px-6 py-3">{cartProduct.length}</td>
                <td class="px-6 py-3">
                  ₹
                  {cartProduct.reduce((acc, curr) => {
                    return acc + curr.price;
                  }, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        ) : (
          <div className="h-[80vh] w-full flex justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-zinc-400">
              No items available 🛒
            </h1>
          </div>
        )}
      </div>
      {cartProduct.length > 0 && (
        <div className="p-3">
          <button
            onClick={handlePopup}
            type="button"
            class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
          >
            <svg
              class="w-4 h-4 me-2 -ms-1 text-[#626890]"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="ethereum"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
              ></path>
            </svg>
            Checkout & Payment
          </button>
        </div>
      )}
      <dialog id="my_modal_1" className="modal">
        <Toaster position="top-right" />
        <div className="modal-box">
          <div className="flex justify-between ">
            <h3 className="font-bold text-lg">Account Detail</h3>
            <X onClick={() => document.getElementById("my_modal_1").close()} />
          </div>

          <div className="modal-action " style={{ width: "100%" }}>
            <form
              method="post "
              style={{ width: "100%" }}
              onSubmit={(e) => handlePaymentForm(e)}
            >
              <div>
                <label
                  for="small-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Account Number
                </label>
                <input
                  type="number"
                  id="small-input"
                  value={formInput.acNum}
                  onChange={(e) =>
                    setformInput({ ...formInput, acNum: e.target.value })
                  }
                  name="acNum"
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  for="small-input"
                  class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Pin
                </label>
                <input
                  type="number"
                  id="small-input"
                  value={formInput.pin}
                  onChange={(e) =>
                    setformInput({ ...formInput, pin: e.target.value })
                  }
                  name="pin"
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <button className="btn mt-3">Submit</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CartTable;
