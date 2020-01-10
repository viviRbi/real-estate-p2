import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header className="header">
    <ul onClick={props.navHandle}>
      <section>

        <Link className="link" to={`/list/for sale`}><span>Buy</span></Link>|
        <Link className="link" to={`/list/for lease`}><span>Rent</span></Link>|
        <Link className="link" to={`/list/all`}><span>All</span></Link>
      </section>
      <section>  <Link className="link" to={`/`}><span>Tessa&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></Link> </section>
      <section>
        <Link className="link" to="/save" ><span>Save <small>{props.saveNum}</small></span></Link>|
        {/* <span className="link">Login</span> */}
      </section>
    </ul>

  </header>
)
export default Header;