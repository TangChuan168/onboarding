import React, { Component } from 'react';

import AddStore from './CreateStore';
import StoreList from './StoreList';





class Store extends Component {
    constructor() {
        super();
        this.state = {

            Data: [],

        }
    }

    async componentDidMount() {
        const url = 'https://localhost:44369/api/Stores/GetStore';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ Data: data });
    }




    render() {
        return (
            <div>

                <AddStore />

                <StoreList list={this.state.Data} />

            </div>
        );
    }
}

export default Store;