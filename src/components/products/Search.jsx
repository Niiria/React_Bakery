import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
    };
  }

  handleSubmit = (e) => {
    const { handleSearch } = this.props;
    const { search } = this.state;

    e.preventDefault();
    handleSearch(search);
    e.target.firstElementChild.firstElementChild.value = '';

    this.setState({
      search: null,
    });
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const { changeCategory } = this.props;
    const { handleSearch } = this.props;

    return (
      <div className="products_header">
        <form
          autoComplete="off"
          className="products_form"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="products_form-input">
            Search:
            <input
              id="products_form-input"
              onChange={this.handleChange}
              onClick={(e) => {
                e.target.value = '';
              }}
            />
          </label>

        </form>

        <ul className="products_form-nav">
          <li>
            <NavLink
              id="All"
              to="/products/all"
              onClick={(e) => {
                handleSearch(null);
                changeCategory(e.target.id);
              }}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              id="Breads"
              to="/products/bread"
              onClick={(e) => {
                handleSearch(null);
                changeCategory(e.target.id);
              }}
            >
              Bread
            </NavLink>
          </li>
          <li>
            <NavLink
              id="Cakes"
              to="/products/cakes"
              onClick={(e) => {
                handleSearch(null);
                changeCategory(e.target.id);
              }}
            >
              Cakes
            </NavLink>
          </li>
          <li>
            <NavLink
              id="Muffins"
              to="/products/muffins"
              onClick={(e) => {
                handleSearch(null);
                changeCategory(e.target.id);
              }}
            >
              Muffins
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
