import React from "react";
import "./detail.css";

const Detail = (props) => {
  const { match, houses } = props;
  let each;
  for (let i = 0; i < houses.length; i++) {
    if (match.params.adr === houses[i].adr) {
      each = houses[i]
    }
  }

  // let each = houses.find(e => e.adr === match.params.adr)
  return (
    <div >
      <h1>Detail</h1>
      <h1>{each.adr}</h1>
      <img src={each.img[0]} alt={each.img[0]} />
      <h2 each={each.adr} onClick={(e) => props.saveHandle(e)}>Add to Save</h2>
      <h2>{each.desc}</h2>
    </div>
  )
}
export default Detail;