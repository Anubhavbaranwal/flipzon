import { useContext, useState } from "react";
import UserContext from "./utils/Usercontext";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./utils/cartSlices";

const EcommCard = (item) => {
  const { id, title, image, rating, price } = item;
  const [itemCount, setItemCount] = useState(0);
  const buttonStyle = {
    backgroundColor:
      rating.rate == "--"
        ? "#fff"
        : parseFloat(rating.rate) < 4.0
        ? "#db7c38"
        : "#48c479",
    color: isNaN(rating.rate) ? "#535665" : "#fff",
  };
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item)); // redux send action object to store {payload : item}
    setItemCount(itemCount + 1);
  };
  const handleRemoveItem = (id) => {
    let updatedCount;
    dispatch(removeItem(id));
    updatedCount = itemCount > 0 ? itemCount - 1 : 0;
    setItemCount(updatedCount);
  };

  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2  hover:shadow-lg">
      <img className=" h-40 " src={image} />
      <div className="card-body">
        <h6 className="font-bold text-xl">
          {title.length < 30 ? title : title.slice(0, 30)}...
        </h6>

        <div className="w-8 text-sm pl-1" style={buttonStyle}>
          <span>{rating.rate}</span>
        </div>
        <div>${price}</div>
        <div className=" flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray ">
          <button
            className="text-xl text-gray-count font-semibold"
            onClick={() => handleRemoveItem(id)}
          >
            {" "}
            -{" "}
          </button>
          <span className="text-base text-green"> {itemCount} </span>
          <button
            className="text-green text-xl"
            onClick={() => handleAddItem(item)}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div>{user.name}</div>
      </div>
    </div>
  );
};

export default EcommCard;
