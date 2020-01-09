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
  const listType = match.params.type === "all" ? "for buy/ rent" : `${match.params.type}`
  if (houseList) {
    return (
      <div className="city-list">
        <header>
          <h1>Houses in {match.params.city.charAt(0).toUpperCase() + match.params.city.slice(1)} {listType}</h1>
        </header>
        <main className="img-list">
          {houseList.map(data => (
            <div key={data.adr} className="each">
              <Link className="link" to={`/detail/${data.adr}`}>
                <div className="thumbnail" style={{ backgroundImage: `url(${data.img[0]})` }}>
                  <div className="img-content">
                    <h2><span>$ {data.price.current}</span><small></small>{data.status}</h2>
                  </div>
                </div>
              </Link>
              <div className="data">

                <h1>{data.adr}</h1>
                <h2>{data.city} {data.zipcode}</h2>
              </div>
            </div>
          ))}
        </main>
      </div>
    )
  } else { return <h2>Loading</h2> }
}
export default cityList