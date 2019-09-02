import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateProduct extends Component {



    render() {
        return (
            <div>
                <Link to='/NewProduct'>
                    <button className="ui blue button">New Product</button>
                </Link>
            </div>
        )
    }
}
export default CreateProduct;