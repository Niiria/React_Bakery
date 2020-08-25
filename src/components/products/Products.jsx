import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  pAchangeCategory,
  pAfetchBreadsData,
  pAfetchCakesData,
  pAfetchMuffinsData,
} from '../../redux/actions/productsAction';

import Search from './Search';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
    };
  }

  componentDidMount() {
    const { getData } = this.props;
    getData();
    const { changeCategory } = this.props;
    changeCategory('All');
  }

  handleSearch =(value) => {
    this.setState({
      search: value,
    });
  };

  render() {
    const { products } = this.props;
    const productsFiltered = products.filter((product) => {
      const { search } = this.state;
      return (
        search === null
        || product.name.toLowerCase().includes(search.toLowerCase())
      );
    });
    const productsList = productsFiltered.length ? (
      productsFiltered.map((product) => (
        <li key={product.id}>
          <img src={product.img} alt="product" />
          <h1>{product.name}</h1>
          <p>
            {product.price}
            $ size:
            {product.size}
          </p>
        </li>
      ))
    ) : (
      <div className="products_error">No products</div>
    );

    const { changeCategory } = this.props;
    return (
      <section className="products">
        <Search
          changeCategory={changeCategory}
          handleSearch={this.handleSearch}
        />
        <ul className="products_view">{productsList}</ul>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getData: () => {
    dispatch(pAfetchBreadsData());
    dispatch(pAfetchCakesData());
    dispatch(pAfetchMuffinsData());
  },
  changeCategory: (category) => {
    dispatch(pAchangeCategory(category));
  },
});

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
