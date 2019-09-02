import React, { Component } from 'react';


export default class EditProduct extends Component {
    constructor(props) {
        super(props)

        const NA = this.props.match.params.result;
        const data = JSON.parse(NA);
        this.state = {
            productId: data.productId,
            name: data.name,
            price: data.price,
        }


    }


    handleChanges = (event) => {
        event.preventDefault();
        let CN = event.target.name === "Name" ? event.target.value : this.state.name;
        let CA = event.target.name === "Price" ? event.target.value : this.state.price;
        this.setState({
            name: CN,
            price: CA,
        });
    }

    ONSubmit = async (Id) => {

        const URL = 'https://localhost:44369/api/Products/PutProduct/' + Id;
        let Products = JSON.stringify({
            CustomerId: this.state.productId,
            Name: this.state.name,
            Price: this.state.price,
        });
        await fetch(URL, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: Products })
        
        window.location.href = 'https://localhost:44369/Product';
    }




    render() {


        return (
            <div className="ui container" style={{ marginTop: '250px' }}>
                <form class="ui form" id="form" onSubmit={() => this.ONSubmit(this.state.productId)}>

                    <div className="field">
                        <label>Name</label>
                        <input onChange={this.handleChanges} value={this.state.name} name="Name" type="text" ></input>
                    </div>

                    <div className="field" >
                        <label>Price</label>
                        <input onChange={this.handleChanges} value={this.state.price} name="Price" type="text" ></input>
                    </div>
                    <button className="ui button" type="submit">Submit</button>

                </form>
            </div>
        )
    }

}