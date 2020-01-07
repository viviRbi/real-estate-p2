import React from "react";
import "./home.css";
import { Route } from "react-router-dom";
import Detail from "../detail/detail";

const Home = (props) => (
  <div>
    <h1>Home</h1>
    {/* filter onChange */}
    <input />
    <Route path="/detail/:city" render={(props) => <Detail {...props} house={props.house} />} />
  </div>
)
export default Home;