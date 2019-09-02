import React, { Component } from 'react';



class NewProduct extends Component {
    constructor() {
        super();


        this.state = {
            Name: '',
            Price: '',
        };
        //this.handleOnchange = this.handleOnchange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleOnchange = event => {
        event.preventDefault();
        let CN = event.target.name === "Name" ? event.target.value : this.state.Name;
        let CA = event.target.name === "Price" ? event.target.value : this.state.Price;
        this.setState({
            Name: CN,
            Price: CA,
        });
    }



    handleSubmit = event => {
        event.preventDefault();
        console.log(' start to add Product');
        const URL = 'https://localhost:44369/api/Products/PostProduct';
        let Products = JSON.stringify({
            Name: this.state.Name,
            Price: this.state.Price,
        });
        console.log(Products);
        fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: Products
        });


        window.location.href = 'https://localhost:44369/Product';



    }




    render() {
        return (
            <div className="ui container" style={{ marginTop: '250px' }}>
                <form class="ui form" id="form" onSubmit={this.handleSubmit} >
                    <div className="field">
                        <label>Name</label>
                        <input onChange={this.handleOnchange} value={this.state.Name} name="Name" type="text" placeholder="Product Name"></input>
                    </div>

                    <div className="field" >
                        <label>Address</label>
                        <input onChange={this.handleOnchange} value={this.state.Price} name="Price" type="text" placeholder="Products Price"></input>
                    </div>
                    <button className="ui button" type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

export default NewProduct;