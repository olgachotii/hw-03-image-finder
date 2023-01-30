import React, { Component } from "react";
import "../../styles.css";
import "./Searchbar.scss";

export default class Searchbar extends Component {
  state = {
    name: "",
  };

  handlChenge = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    const { name } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button ">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            id={this.nameId}
            value={name}
            onChange={this.handlChenge}
            name="name"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
