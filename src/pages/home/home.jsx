import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = (props) => {

  return (
    <div>
      <h1>Home</h1>

      <input type="text" placeholder="City name" onChange={(e) => props.searchHandle(e)} />

      <Link onClick={() => props.submitSearchHandle()} to={props.houses.find(house => house.city.toLowerCase() === props.submitSearch.toLowerCase()) ? `list/all/${props.submitSearch}` : `/`}>
        Submit
      </Link>

    </div>

  )
}
export default Home;