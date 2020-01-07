import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header className="header">
    <ul onClick={props.navHandle}>
      <section>
        {/* {console.log(props.type)} */}
        <Link to={`/list/for sale`}><button>Buy</button></Link>
        <Link to={`/list/for lease`}><button>Rent</button></Link>
        <Link to={`/list/all`}><button>All</button></Link>
      </section>

      <section>
        <Link to="/save"><button>Save</button></Link>
        <button>Login</button>
      </section>
    </ul>

  </header>
)
export default Header;