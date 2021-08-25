import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: ''
    };
    console.log(props)
  }
  handleChangeUname = (event) => {
    this.setState({
      username: event.target.value
    })
    console.log(event.target.value)
  }

  handleChangePW = (event) => {
    this.setState({
      password: event.target.value
    })
    console.log(event.target.value)
  }

  handleSub = (event) => {
    event.preventDefault()

    if(this.state.username.length > 0 && this.state.password.length > 0){
      console.log([this.state])
      this.props.handleLogin(this.state)
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSub}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChangeUname} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChangePW} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
