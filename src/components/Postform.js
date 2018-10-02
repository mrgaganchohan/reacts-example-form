import React, { Component } from 'react';
import axios from 'axios';
class PostForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
       
        name: "PixelBook",   
        productId: 'pixelunique',    
        brand:'Google',    
        subCategoryId:'3',
        rating:'4.5',
        status:'active',     
        description:'this is the default description',   
        price:'1400',
        discount:'0.0',
        
      };
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

    }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });


  }

  onSubmit(e) {
    e.preventDefault();

    const dataToSend = {
      
      name: this.state.name,
      productId: this.state.productId,
      brand: this.state.brand,
      subCategoryId: this.state.subCategoryId,
      rating: this.state.rating,
      status: this.state.status,
      description: this.state.description,
      price: this.state.price,
      discount: this.state.discount,

      
    }
    // console.log(dataToSend);


 
    axios.post('https://api.elixir.ausgrads.academy/products_micro/products/add',  dataToSend  
     
   )
    .then(res => {
    })
}
  

  

  render() {
    return (
      <div>
        <h1>Add Product</h1>
        <form onSubmit={this.onSubmit} >
          <div>
            <label>Name: </label>
            <br />
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <br />
          <div>
            <label>Product Id: </label>
            <br />
            
            <input
            type="text"
              name="productId"
              onChange={this.onChange}
              value={this.state.productId}

            />
          </div>
          <br />
          <div>
            <label>Brand: </label>
            <br />
            <input
            type="text"
              name="brand"
              onChange={this.onChange}
              value={this.state.brand}

            />
          </div>
          <br />
          <div>
            <label>subCategoryId: </label>
            <br />
            <input
            type="number"
              name="subCategoryId"
              onChange={this.onChange}
              value={this.state.subCategoryId}

            />
          </div>
          <br />
          <div>
            <label>Rating: </label>
            <br />
            <input
            type="number"
              name="rating"
              onChange={this.onChange}
              value={this.state.rating}

            />
          </div>
          <br />
          <div>
            <label>Status: </label>
            <br />
            <input
            type="text"
              name="status"
              onChange={this.onChange}
              value={this.state.status}

            />
          </div>
          <br />
          <div>
            <label>Description: </label>
            <br />
            <textarea
              name="description"
              onChange={this.onChange}
              value={this.state.description}

            />
          </div>
          <br />
          <div>
            <label>Price: </label>
            <br />
            <input
            type="number"
              name="price"
              onChange={this.onChange}
              value={this.state.price}

            />
          </div>
          <br />
          <div>
            <label>Discount: </label>
            <br />
            <input
            type="number"
              name="discount"
              onChange={this.onChange}
              value={this.state.discount}

            />
          </div>
          <br/>


          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
export default PostForm;
