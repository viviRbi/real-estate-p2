import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      summit: false
    }
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <h2>Sign in</h2>
      </div>
    )
  }
}
export default Login;