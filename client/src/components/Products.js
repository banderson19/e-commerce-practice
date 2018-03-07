import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {getProducts} from '../redux/actions/products';

import Product from './Product';

class Products extends Component {
  componentDidMount() {
    this.props.products.data.length === 0 && this.props.getProducts();
  }

  render() {
    return (
      <div>
        <div>Products</div>
        {this.props.products.fetching && <h1>Loading</h1>}
        {this.props.products.data.map((product, index) => {
          return (
            <Product product={product} key={index}/>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, {getProducts})(Products)