import React from "react";
import "./list.css";
import { Link } from "react-router-dom";

function List(props) {
  const { houses, match } = props;
  let houseList = [];
  for (let i = 0; i < houses.length; i++) {
    if (houses[i].status.toLowerCase() === match.params.type) {
      houseList.push(houses[i])
    }
    else if (match.params.type === "all") {
      houseList.push(houses[i])
    }
  }

  const cities = [];
  houseList.forEach(e => cities.push(e.city));

  const cityNum = cities.reduce((count, city) => {
    if (count[city]) {
      count[city]++;
      return count;
    } else {
      count[city] = 1;
      return count
    }
  }, {})

  const keysArr = Object.keys(cityNum).map((city, id) => {
    return (
      <div key={id}>
        <Link to={`/list/${match.params.type}/${city}`}><h1>{city}: {cityNum[city]} house(s)</h1></Link>
      </div>
    )
  })
  return (
    <div className="list">
      <h1>House {match.params.type}</h1>
      {keysArr}
    </div>
  )
}
export default List;

