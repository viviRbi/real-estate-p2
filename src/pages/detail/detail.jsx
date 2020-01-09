import React, { Component } from "react";
import "./detail.css";
import Footer from "../../component/footer/footer";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPicId: 0,
      submit: false
    }
  }
  mainPicHandle = (e) => {
    const id = e.target.attributes.getNamedItem('i').value;
    this.setState(() => ({ mainPicId: id }))
  }
  contactHandle = (e) => {
    e.preventDefault();
    let submitCopy;
    this.state.submit === true ? submitCopy = false : submitCopy = true
    this.setState(() => ({ submit: submitCopy }))
  }
  render() {
    const { match, houses } = this.props;
    let each;
    for (let i = 0; i < houses.length; i++) {
      if (match.params.adr === houses[i].adr) {
        each = houses[i]
      }
    }
    if (each) {
      return (
        <div className="detail">
          <main>
            <figure>
              <div className="main-img" style={{ backgroundImage: `url(${each.img[this.state.mainPicId]})` }} > <span each={each.adr} onClick={(e) => this.props.saveHandle(e)}>Save</span></div>
              <div className="slide-container">
                {each.img.map((_, i) => <div className={each.img[i] === each.img[this.state.mainPicId] ? "slide-img chosen" : "slide-img "} i={i} key={each.img[i]} style={{ backgroundImage: `url(${each.img[i]})` }} onClick={(e) => this.mainPicHandle(e)} />)}
              </div>

              <section className="general">
                <article>
                  <h3>{each.adr}</h3>
                  <h3>{each.city} TX {each.zipcode}</h3>
                </article>

                <article>
                  <h3>General Describtion</h3>
                  <h6>{each.desc}</h6>
                </article>
              </section>
              <section className="general table">
                <h3>Details</h3>
                <table>
                  <tbody>
                    <tr>
                      <td><p><span>Listing Price:</span><small>${each.price.listing}</small></p></td>
                      <td><p><span>Listing Status:</span><small>{each.status}</small></p></td>
                    </tr>
                    <tr>
                      <td><p><span>State:</span><small>TX</small></p></td>
                      <td><p><span>Adress:</span><small>{each.adr}</small></p></td>
                    </tr>
                    <tr>
                      <td><p><span>County:</span><small>{each.county}</small></p></td>
                      <td><p><span>City:</span><small>{each.city}</small></p></td>
                    </tr>
                    <tr>
                      <td><p><span>Sqft:</span><small>{each.sqft} ft</small></p></td>
                      <td><p><span>Zipcode:</span><small>{each.zipcode}</small></p></td>
                    </tr>
                    <tr>
                      <td><p><span>Baths:</span><small>{each.bath.full} full bath(s) and {each.bath.half} bath(s)</small></p></td>
                      <td><p><span>Beadrooms:</span><small>{each.bed} bedrooms</small></p></td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </figure>
            <div className="form">
              <input type="text" placeholder="First name" /> <br />
              <input type="text" placeholder="Last name" /><br />
              <input type="text" placeholder="Email" /><br />
              <input type="text" placeholder="Phone" />
              <button onClick={(e) => this.contactHandle(e)}>Contact</button>
              <p>{this.state.submit === true ? "Sent. Thank you for using our service!" : ""}</p>
            </div>
          </main>
          <hr />
          <Footer />



        </div>
      )
    }
    else {
      return <h2>Loading</h2>
    }
  }
}
export default Detail;