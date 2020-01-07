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
  return (
    <div className="list">
      <h1>List {match.params.type}</h1>
      {houseList.map(data => (
        <div key={data.adr} className="each">
          <Link to={`/detail/${data.adr}`}>
            <img className="thumbnail" src={data.img[0]} alt={data.img[0]} />
          </Link>
          <h1>{data.adr}</h1>
          <h2>{data.status}</h2>
        </div>
      ))}
    </div>
  )
}
export default List;