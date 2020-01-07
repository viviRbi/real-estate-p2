import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  const matchSearch = props.houses.find(house => house.city.toLowerCase() === props.match.city)
  let all, city;
  if (matchSearch) { all = "/list/all/"; city = props.submitSearch }
  else { all = ""; city = "" }
  console.log(props.submitSearch)
  return (
    <div>
      <h1>Home</h1>

      <input type="text" placeholder="City name" onChange={(e) => props.searchHandle(e)} />
      <Link to={`${all}${city}`}><button onClick={props.submitSearchHandle}>Submit</button></Link>
      {all === "" && props.submitSearch ? <h5>Please search for another city</h5> : <h5></h5>}
    </div>
  )
}
export default Home;