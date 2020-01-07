import "./cityList.css";
import React from "react";
import { Link } from 'react-router-dom';

const cityList = (props) => {
  const { houses, match } = props;
  let houseList = [];
  for (let i = 0; i < houses.length; i++) {
    if (houses[i].status.toLowerCase() === match.params.type && houses[i].city.toLowerCase() === match.params.city.toLowerCase()) {
      houseList.push(houses[i])
    }
    else if (match.params.type === "all" && houses[i].city.toLowerCase() === match.params.city.toLowerCase()) {
      houseList.push(houses[i])
    }
  }
  if (houseList) {
    return (
      <div>
        <h1>City list</h1>
        {houseList.map(data => (
          <div key={data.adr} className="each">
            <Link to={`/detail/${data.adr}`}>
              <img className="thumbnail" src={data.img[0]} alt={data.img[0]} />
            </Link>
            <h1>{data.adr}</h1>
            <h2>{data.city} {data.zipcode}</h2>
            <h2>{data.status}</h2>
          </div>
        ))}
      </div>
    )
  } else { return <h2>Loading</h2> }
}
export default cityList