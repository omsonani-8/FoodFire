import Card from "./Cards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [res_list, setRes_list] = useState([]);
  const [filter_res, setFilter_res] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //  console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    const rl = await json?.data?.cards[1]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;
    
    setRes_list(rl);
    setFilter_res(rl);
  }

  return res_list.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filterData = res_list.filter((res)=>{
                   return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
                })
                setFilter_res(filterData);
            }}
          >
            search
          </button>
        </div>
        {/* <button
          onClick={() => {
               const filterList =  res_list.filter((value)=>value?.info?.avgRating > 4)
               setRes_list(filterList);
        }}
        >
          Top Rated Restaurant
        </button> */}
      </div>
      <div className="res-container">
        {filter_res.map((restaurant) => (
          <Link  key={restaurant.info.id} to={"/res/"+restaurant.info.id}> <Card  resData={restaurant}></Card></Link>
         
        ))}
      </div>
    </div>
  );
};

export default Body;
