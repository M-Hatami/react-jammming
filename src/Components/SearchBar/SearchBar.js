import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }
  search = () => {
    this.props.onSearch(this.state.searchTerm);
  };

  handleTermChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="اسم یک اثر، مجموعه یا مؤلف را وارد کنید "
          onChange={this.handleTermChange}
        />
        <button className="SearchButton" onClick={this.search}>
          جستجو
        </button>
      </div>
    );
  }
}

export default SearchBar;
