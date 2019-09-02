import React, { Component } from 'react';
import CreateSales from './CreateSales';
import SalesList from './SalesList';





class Sales extends Component {
    constructor() {
        super();
        this.state = {

            Data: [],

        }
    }

    async componentDidMount() {
        const url = 'https://localhost:44369/api/Sales/GetSales';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ Data: data });
    }




    render() {
        return (
            <div>

                <CreateSales />

                <SalesList list={this.state.Data} />

            </div>
        );
    }
}

export default Sales;