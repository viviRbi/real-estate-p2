import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Footer from "../../component/footer/footer";

const Home = (props) => {

  return (
    <div className="home">
      <header>
        <div className="landing-image">
          <div className="landing-overlay">
            <div className="landing-holder">
              <h1>Houses in Texas</h1>
              <h3>Find your lovely home</h3>
              <input type="text" placeholder="Please type your city name" onChange={(e) => props.searchHandle(e)} />
              <br />
              <Link
                className="go"
                onClick={props.submitHandle}
                to={props.houses.find(house => house.city.toLowerCase() === props.search.toLowerCase()) && props.search ? `list/all/${props.search}` : `/`
                }>
                GO
            </Link>
            </div>
          </div>
        </div>
      </header>


      <main>
        <section className="topic">
          <h3>Tessa have the best research team in Texas.</h3>
          <h4>You will never miss a good oppotunity</h4>
          <hr />
        </section>

        <section className="buy-sell">
          <article>
            <h3>Buy a home</h3>
            <p>Find your right house with our current list. There will be houses you won't find anywhere else</p>
            <button><Link className="link" to={`/list/for sale`}>Search home</Link></button>

          </article>
          <article>
            <h3>Rent a home</h3>
            <p>We have everything, from a small room, to a big house and to a fancy apartment.</p>
            <button><Link className="link" to={`/list/for lease`}>Find Rental</Link></button>
          </article>
          <article>
            <h3>Rent or Buy</h3>
            <p>Still haven't decide to buy or rent? Don't worry. Please check our curent list for both.</p>
            <button><Link className="link" to={`/list/all`}>Buy or Rent</Link></button>
          </article>
        </section>
      </main>

      <Footer />
    </div>

  )
}
export default Home;