import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateCustomer extends Component {



    render() {
        return (
            <div>
                <Link to='/NewCustomer'>
                    <button  className="ui blue button">New Customer</button>
                </Link>
            </div>
            )
    }
}
export default CreateCustomer;