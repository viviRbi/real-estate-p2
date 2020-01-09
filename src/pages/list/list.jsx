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
  let listImg;
  if (match.params.type === "for sale") {
    listImg = "https://canadianbudgetbinder.files.wordpress.com/2012/12/house1-with-yardsign.jpg"
  } else if (match.params.type === "for lease") {
    listImg = "http://www.mikesalkin.com/articles/images/manage4.jpg"
  } else {
    listImg = "https://www.scottsdalerealestatearizona.com/wp-content/uploads/2013/10/6390_Sunnyside_Pool_Area1.jpg"
  }
  const listType = match.params.type === "all" ? "for buy/ rent" : `${match.params.type}`
  const keysArr = Object.keys(cityNum).map((city, id) => {
    return (
      <div className="each" key={id}>
        <Link className="link" to={`/list/${match.params.type}/${city.toLowerCase()}`}><h1>{city}<br /> {cityNum[city]} house(s) {listType}</h1></Link>
      </div>
    )
  })
  if (keysArr) {
    return (
      <div className="list">
        <header>
          <div className="img" style={{ backgroundImage: `url(${listImg})` }} />
          <div className="block" />
          <h1>Houses {listType}</h1>
        </header>

        <main>
          {keysArr}
        </main>
      </div>
    )
  }
  else { return <h2>Loading ...</h2> }
}
export default List;

