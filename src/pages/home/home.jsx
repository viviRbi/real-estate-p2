import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = (props) => {

  return (
    <div className="home">
      <section>
        <div className="landing-image">
          <div className="landing-holder">
            <h1>Texan Houses</h1>
            <h3>Find your lovely home</h3>
            <input type="text" placeholder="City name" onChange={(e) => props.searchHandle(e)} />

            <Link to={props.houses.find(house => house.city.toLowerCase() === props.search.toLowerCase()) ? `list/all/${props.search}` : `/`}>
              GO
      </Link>
          </div>
        </div>
      </section>

      <section>

      </section>
    </div>

  )
}
export default Home;