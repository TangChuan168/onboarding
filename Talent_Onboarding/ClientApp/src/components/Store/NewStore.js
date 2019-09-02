import React, { Component } from 'react';



class NewStore extends Component {
    constructor() {
        super();


        this.state = {
            Name: '',
            Address: '',
        };
        //this.handleOnchange = this.handleOnchange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleOnchange = event => {
        event.preventDefault();
        let CN = event.target.name === "Name" ? event.target.value : this.state.Name;
        let CA = event.target.name === "Address" ? event.target.value : this.state.Address;
        this.setState({
            Name: CN,
            Address: CA,
        });
    }



    handleSubmit = event => {
        event.preventDefault();
        console.log(' start to add Store');
        const URL = 'https://localhost:44369/api/Stores/PostStore';
        let Store = JSON.stringify({
            Name: this.state.Name,
            Address: this.state.Address,
        });

        fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: Store
        });


        window.location.href = 'https://localhost:44369/Store';



    }




    render() {
        return (
            <div className="ui container" style={{ marginTop: '250px' }}>
                <form class="ui form" id="form" onSubmit={this.handleSubmit} >
                    <div className="field">
                        <label>Name</label>
                        <input onChange={this.handleOnchange} value={this.state.Name} name="Name" type="text" placeholder="Store Name"></input>
                    </div>

                    <div className="field" >
                        <label>Address</label>
                        <input onChange={this.handleOnchange} value={this.state.Address} name="Address" type="text" placeholder="Store Address"></input>
                    </div>
                    <button className="ui button" type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

export default NewStore;