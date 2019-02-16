import React, { Component } from 'react'

class SignIn extends Component {
  render() {
    return (
      <div className="container">
          <form onSubmit="" className="white">
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange="" />
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange="" />
            </div>
            <div>
                <button class="btn pink lighten-1 z-depth-0">Login</button>
            </div>
          </form>
      </div>
    )
  }
}

export default SignIn
