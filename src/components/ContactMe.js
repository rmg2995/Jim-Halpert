import React, { Component } from "react";
// import Axios from "axios";
class ContactMe extends Component {
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    // let res = await Axios.post(`http://localhost:5000/addMovie`, this.state);
    // alert(res.data);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="title"
            type="text"
            placeholder="Name"
          />
          <input
            onChange={this.handleChange}
            name="title"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={this.handleChange}
            name="director"
            type="text"
            placeholder="Comment"
          />
          <button>Comment</button>
        </form>
      </div>
    );
  }
}

export default ContactMe;
