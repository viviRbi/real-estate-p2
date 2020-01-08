import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header className="header">
    <ul onClick={props.navHandle}>
      <section>

        <Link className="link" to={`/list/for sale`}><a>Buy</a></Link>|
        <Link className="link" to={`/list/for lease`}><a>Rent</a></Link>|
        <Link className="link" to={`/list/all`}><a>All</a></Link>
      </section>
      <section>  <Link className="link" to={`/`}><a>Tessan</a></Link></section>
      <section>
        <Link className="link" to="/save" ><a>Save <span>{props.saveNum}</span></a></Link>
        |<a className="link">Login</a>
      </section>
    </ul>

  </header>
)
export default Header;