import React from "react";
import "./save.css";

const Save = (props) => {
  const { save } = props;
  return (
    <div>
      <h1>Your favorite house(s)</h1>
      {save.map(e => (
        <div key={e.adr}>
          <img src={e.img[0]} alt={e.img[0]} />
          <h1>{e.adr}</h1>
          <h1 each={e.adr} onClick={(e) => props.removeSaveHandle(e)}> Remove Save</h1>
        </div>
      ))}

    </div>
  )
}
export default Save;