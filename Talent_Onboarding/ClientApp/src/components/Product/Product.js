import React, { Component } from 'react';

import AddProduct from './CreateProduct';
import ProductList from './ProductList';





class Product extends Component {
    constructor() {
        super();
        this.state = {

            Data: [],

        }
    }

    async componentDidMount() {
        const url = 'https://localhost:44369/api/Products/GetProduct';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ Data: data });
    }




    render() {
        return (
            <div>

                <AddProduct />

                <ProductList list={this.state.Data} />

            </div>
        );
    }
}

export default Product;