import React, { Component } from "react";
import "./detail.css";
import Footer from "../../component/footer/footer";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPicId: 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      submit: false
    }
  }
  mainPicHandle = (e) => {
    const id = e.target.attributes.getNamedItem('i').value;
    this.setState(() => ({ mainPicId: id }))
  }
  contactHandle = (e) => {
    e.preventDefault();
    let submitValue;
    if (this.state.firstName && this.state.lastName && this.state.email && this.state.phone) {
      submitValue = "Sent. Thank you for using our service!"
    } else {
      submitValue = "Please fill all the information."
    }
    this.setState({ submit: submitValue })
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
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
            <form className="form">
              <input name="firstName" type="text" placeholder="First name" onChange={this.handleChange} required /> <br />
              <input name="lastName" type="text" placeholder="Last name" onChange={this.handleChange} required /><br />
              <input name="email" type="email" placeholder="Email" onChange={this.handleChange} required /><br />
              <input name="phone" type="number" placeholder="Phone" onChange={this.handleChange} required />
              <button onClick={this.contactHandle}>Contact</button>
              <p>{this.state.submit}</p>
            </form>
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