import { useEffect, useState } from "react";
import { img_cdn_link } from "../constants";
import Pricecontext from "./utils/Pricecontext";
const Fooditem = ({ title, price, image }) => {
  const [totalPrice, setTotalPrice] = useState({
    totalPrice: 0,
  });

  return (
    <>
      <div className=" p-2  m-2 w-48 hover:shadow-lg">
        <Pricecontext.Provider value={{ totalPrice: totalPrice }}>
          <img className="border-2 border-yellow-300" src={image} />
          <h6 className=" flex justify-between">
            <div> {title}</div> <div>${price}</div>
          </h6>
        </Pricecontext.Provider>
      </div>
    </>
  );
};

export default Fooditem;
