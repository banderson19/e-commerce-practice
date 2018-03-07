import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateProduct} from '../redux/actions/products';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      product: props.product
    }
  }

  onEditClick = () => {
    this.setState({edit: true})
  }

  onCancelClick = () => {
    this.setState({edit: false})
  }

  onNameChange = e => {
    let updates = {...this.state.product, name: e.target.value }
    this.setState({product: updates})
  }

  onPriceChange = e => {
    let updates = { ...this.state.product, price: e.target.value }
    this.setState({product: updates})
  }

  onDescChange = e => {
    let updates = { ...this.state.product, description: e.target.value }
    this.setState({product: updates})
  }

  onSaveClick = () => {
    this.props.updateProduct(this.state.product);
    this.setState({edit: false})
  }

  render() {
    const { product } = this.state;

    return (
      <div>
        {this.state.edit ? 
          <div>
            <img src={product.imageUrl}/>
            <input placeholder={product.name} onChange={this.onNameChange}/>
            <input placeholder={product.price} onChange={this.onPriceChange}/>
            <textarea placeholder={product.description} onChange={this.onDescChange}/>

            <button onClick={this.onCancelClick}>cancel</button>
            <button onClick={this.onSaveClick}>save</button>
          </div>
          :
          <div>
            <img src={product.imageUrl} />
            <div> {product.name} </div>
            <div> ${product.price} </div>
            <div> {product.description} </div>

            <button onClick={this.onEditClick}>edit</button>
          </div>
        }
      </div>
    )
  }
}

export default connect(null, {updateProduct})(Product);