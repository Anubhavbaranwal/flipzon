import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemQuantity from "./ItemQuantity";
import { clearCart } from "./utils/cartSlices";
import { cart } from "../constants";
import { isEmptyObject } from "./utils/Helper.js";
import useItemTotal from "./utils/useItemTotal.js";
// import { useAuth0 } from "@auth0/auth0-react";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const address = useSelector((store) => store.cart.deliveryAddress);
  const payment = useSelector((store) => store.cart.paymentMethod);
  const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);
  const getItemTotal = useItemTotal();
  const dispatch = useDispatch();
  const handleclear = () => {
    dispatch(clearCart());
  };
  if (!(totalItemsCount > 0))
    return (
      <div className="">
        <div className="flex justify-center text-center">
          <img src={cart} alt="add product image" />
        </div>
        <h1 className="text-2xl text-center">
          ⛔Please add some product in your cart
        </h1>
      </div>
    );
  return (
    <>
      <h1 className="font-bold text-center text-5xl"> Cart Items</h1>
      <div className="font-bold text-center justify-center ">
        <button
          className="bg-red-500 text-center px-2  rounded text-2xl"
          onClick={() => handleclear()}
        >
          ClearCart
        </button>
      </div>
      <div className="">
        {Object.values(cartItems).map((item) => {
          return (
            <div className="my-3">
              <div className="flex justify-center items-center mt-2">
                <p className="px-2 w-48 text-sm">{item.title}</p>
                <div className="px-5">
                  <ItemQuantity item={item} key={item.id} />
                </div>

                <p className="font-thin text-sm">
                  {"₹ " + item.price * item.quantity}
                </p>
              </div>
            </div>
          );
        })}

        <div className="border border-black my-2"></div>
        <div className="flex justify-evenly">
          <p className="font-bold text-sm">To Pay</p>
          <p className="font-bold  text-sm">{"₹ " + getItemTotal()}</p>
        </div>
      </div>
      <>
        <div className="border border-black my-2"></div>
        <div className="text-center">
          {!isEmptyObject(address) && (
            <div className="flex flex-col justify-between my-2">
              <h1 className="text-lg mt-2.5 text-title font-bold ">
                Delivery Address
              </h1>
              <h2 className="font-semibold mt-2.5 text-title text-base">
                {address.addressType}
              </h2>
              <p className="text-sm text-bio text-ellipsis">
                {address.addressDescription}
              </p>
            </div>
          )}
          {!isEmptyObject(payment) && (
            <div className="flex flex-col justify-between mb-2">
              <h1 className="text-lg mt-2.5 text-title font-bold ">Payment</h1>
              <h2 className="font-semibold mt-2.5 text-title text-base">
                {payment.paymentType}
              </h2>
              <p className="text-sm text-bio text-ellipsis">
                {payment?.paymentMethod}
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-center my-10">
          <Link to="/payment">
            <button className="bg-red-600 px-4 py-2 text-black rounded-lg hover:drop-shadow-lg backdrop-blur">
              PROCEED TO PAYMENT
            </button>
          </Link>
        </div>
      </>
      )
    </>
  );
};
export default Cart;
