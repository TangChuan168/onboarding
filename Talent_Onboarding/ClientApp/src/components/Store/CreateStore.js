import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateStore extends Component {



    render() {
        return (
            <div>
                <Link to='/NewStore'>
                    <button className="ui blue button">New Store</button>
                </Link>
            </div>
        )
    }
}
export default CreateStore;