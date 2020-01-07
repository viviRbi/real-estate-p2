import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";

import Home from "./pages/home/home";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import List from "./pages/list/list";
import Detail from "./pages/detail/detail";
import Login from "./constructor/login/login";
import Save from "./pages/save/save";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      type: ""
    }
  }
  componentDidMount() {
    fetch('https://obscure-escarpment-04649.herokuapp.com/')
      .then(data => data.json())
      .then(data => this.setState({ houses: data }))
  }
  navHandle = (e) => {
    let typeText = e.target.innerText.toLowerCase();
    if (typeText === "buy") { typeText = "for sale" }
    else if (typeText === "rent") { typeText = "for lease" }
    else if (typeText === "all") { typeText = "all" }
    this.setState(() => ({ type: typeText }))
  }


  render() {
    return (
      <div>
        {/* Login is a pop up, do not required Route */}
        {this.state.type === "login" ? <Login /> : null}
        {console.log(this.state.houses)}
        <Header navHandle={(e) => this.navHandle(e)} type={this.state.type} />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} houses={this.state.houses} />} />
          <Route exact path="/save" render={(props) => <Save {...props} houses={this.state.houses} />} />
          <Route exact path="/list/:type" render={(props) => <List {...props} houses={this.state.houses} type={this.state.type} />} />
          <Route exact path="/detail/:adr" render={(props) => <Detail {...props} houses={this.state.houses} />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
