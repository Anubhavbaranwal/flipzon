// import RestaurantList from "../constants";
import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "./utils/Helper";
import useOnline from "./utils/useOnline";

const Body = () => {
  const [allData, setAllData] = useState([]);
  const [filteredproduct, setfilteredproduct] = useState([]);
  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    getDatalist();
  }, []);
  async function getDatalist() {
    const data = await fetch("https://fakestoreapi.com/products?sort=desc");
    const json = await data.json();
    console.log(json);
    setAllData(json);
    setfilteredproduct(json);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>⛔Please check your internet Connection </h1>;
  }
  const handleSubmit = () => {
    console.log(SearchText);
    const data = filterData(SearchText, allData);
    setfilteredproduct(data);
  };

  if (!allData) return null;

  return allData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="text-center px-2">
        <input
          type="text "
          placeholder="Search"
          className="mx-3 p-2 px-2 w-96 border border-gray-200 rounded-md hover:border max-md:w-auto"
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="p-2 px-4 bg-red-500 text-white rounded-md hover:shadow-md max-md:mt-2"
          onClick={() => handleSubmit()}
        >
          Search
        </button>
      </div>
      {filteredproduct?.length === 0 ? (
        <h1 className="text-center text-2xl">No product match your Filter!!</h1>
      ) : (
        <div className="flex flex-wrap justify-items-center ml-8">
          {filteredproduct.map((data, index) => {
            return (
              <div key={data.id}>
                <Card {...data} />
              </div>
            );
          })}
          ;
        </div>
      )}
    </>
  );
};

export default Body;
