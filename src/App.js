import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/home";
import Header from "./component/header/header";
import List from "./pages/list/list";
import CityList from "./pages/cityList/cityList";
import Detail from "./pages/detail/detail";
import Login from "./constructor/login/login";
import Save from "./pages/save/save";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      type: "",
      save: [],
      search: "",
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
  saveHandle = (e) => {
    const newAdr = e.target.attributes.getNamedItem('each').value
    const saveHouses = this.state.save.concat();
    const saveHouse = this.state.houses.find(house => house.adr === newAdr)
    saveHouses.push(saveHouse)
    const removeDuplicate = []
    for (let i = 0; i < saveHouses.length; i++) {
      if (!removeDuplicate.includes(saveHouses[i])) {
        removeDuplicate.push(saveHouses[i])
      }
    }

    this.setState(() => ({ save: removeDuplicate }))

  }
  removeSaveHandle = (e) => {
    const removeAdr = e.target.attributes.getNamedItem('each').value;
    const removeObj = this.state.save.find(house => house.adr === removeAdr)
    const index = this.state.save.indexOf(removeObj)
    const saveHouses = this.state.save.concat();
    saveHouses.splice(index, 1);
    this.setState(() => ({ save: saveHouses }))
  }
  searchHandle = (e) => {
    const search = e.target.value.toLowerCase()
    this.setState(() => ({ search: search }))
  }
  submitHandle = (e) => {
    const search = "";
    this.setState({ search })
  }

  render() {
    return (
      <div className="all">
        {/* Login is a pop up, do not required Route */}
        {this.state.type === "login" ? <Login /> : null}

        <Header navHandle={(e) => this.navHandle(e)} type={this.state.type} saveNum={this.state.save.length} />
        <main className="main">
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} houses={this.state.houses} searchHandle={(e) => this.searchHandle(e)} search={this.state.search} submitHandle={this.submitHandle} />} />
            <Route exact path="/save" render={(props) => <Save {...props} houses={this.state.houses} save={this.state.save} removeSaveHandle={(e) => this.removeSaveHandle(e)} />} />
            <Route exact path="/list/:type" render={(props) => <List {...props} houses={this.state.houses} type={this.state.type} />} />
            <Route exact path="/list/:type/:city" render={(props) => <CityList {...props} houses={this.state.houses} type={this.state.type} />} />
            <Route exact path="/detail/:adr" render={(props) => <Detail {...props} houses={this.state.houses} saveHandle={(e) => this.saveHandle(e)} />} />
          </Switch>
        </main>

      </div>
    );
  }
}

export default App;
