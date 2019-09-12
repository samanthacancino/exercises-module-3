import React from "react";

class FormularioPelis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: ""
    };

    this.handleChange = this.handleChange.bind(this);
    // this.forceUpdate();
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div>
          <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="language">Language:</label>
          <select name="language" onChange={this.handleChange}>
            <option value="Spanish">Spanish</option>
            <option value="English">English</option>
            <option value="Portuguese">Portuguese</option>
          </select>
      </form>
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.description}</p>
            <p>{this.state.language}</p>
          </div>
        </div>
    );
  }
}

export default FormularioPelis;
