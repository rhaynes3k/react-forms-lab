import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tMsg: ''
    };
    console.log(this.state.tMsg.length)
  }
  handleChange = (event) => {
    this.setState({
      tMsg: event.target.value
    })
  }
  render() {
    let charCnt = this.props.maxChars - this.state.tMsg.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.tMsg}/>
        {charCnt}
      </div>
    );
  }
}

export default TwitterMessage;
