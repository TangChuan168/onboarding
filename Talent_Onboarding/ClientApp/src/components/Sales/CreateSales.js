import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateSales extends Component {


    render() {
        return (
            <div>
                <Link to='/NewSales'>
                    <button className="ui blue button">New Sales</button>
                </Link>
            </div>
        )
    }
}
export default CreateSales;