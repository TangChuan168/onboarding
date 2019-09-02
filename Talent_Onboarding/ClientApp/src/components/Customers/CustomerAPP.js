import React, { Component } from 'react';

import AddCustomer from './CreateCustomer';
import CustomerList from './CustomerList';





class CustomerAPP extends Component {
    constructor() {
        super();
        this.state = {

            Data: [],

        }
    }

    async componentDidMount() {
            const url = 'https://localhost:44369/api/Customers/GetCustomer';
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            this.setState({ Data:data });
    }




    render() {
        return (
                <div>
                
                <AddCustomer />

                <CustomerList list={this.state.Data} />

              </div>
              );
    }
}

export default CustomerAPP;