import React from "react";
import "./list.css";


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
    <div>
      <h1>List {match.params.type}</h1>
      {houseList.map(data => (
        <div key={data.adr}>
          <div style={{ backgroundImage: `url${data.img[0]}` }} />
          <h1>{data.adr}</h1>
          <h2>{data.status}</h2>
        </div>
      ))}
    </div>
  )
}
export default List;