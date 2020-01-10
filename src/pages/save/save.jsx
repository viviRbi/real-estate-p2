import React from "react";
import "./save.css";
import { Link } from "react-router-dom";

const Save = (props) => {
  const { save } = props;
  return (
    <div className="save-all">
      <header><h1>Your favorite house(s)</h1></header>
      <div className="save">
        {save.map(e => (
          <section className="each" key={`${e.adr}save`}>
            <div className="link" to={`/detail/${e.adr}`}>
              <div className="save-each" >
                <div className="save-img" style={{ backgroundImage: `url(${e.img[0]})` }} alt={e.img[0]}>
                  <span className="save-remove" each={e.adr} onClick={(e) => props.removeSaveHandle(e)}> Remove Save</span>
                  <small className="overlay">
                    <h1> <strong className="dot"></strong>{e.status}</h1>
                  </small>
                </div>

                <Link className='adr' to={`/detail/${e.adr}`}>
                  <h1>{e.adr}</h1>
                  <h2>{e.city} TX {e.zipcode}</h2>
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
export default Save;