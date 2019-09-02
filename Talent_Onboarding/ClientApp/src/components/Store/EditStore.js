import React, { Component } from 'react';


export default class EditStore extends Component {
    constructor(props) {
        super(props)

        const NA = this.props.match.params.result;
        const data = JSON.parse(NA);

        this.state = {
            storeId: data.storeId,
            name: data.name,
            address: data.address,
        }


    }


    handleChanges = (event) => {
        event.preventDefault();
        let CN = event.target.name === "Name" ? event.target.value : this.state.name;
        let CA = event.target.name === "Address" ? event.target.value : this.state.address;
        this.setState({
            name: CN,
            price: CA,
        });
    }

    ONSubmit = async (Id) => {

        const URL = 'https://localhost:44369/api/Stores/PutStore/' + Id;
        let Store = JSON.stringify({
            StoreId: this.state.storeId,
            Name: this.state.name,
            Address: this.state.address,
        });
        await fetch(URL, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: Store })

        window.location.href = 'https://localhost:44369/Store';
    }




    render() {


        return (
            <div className="ui container" style={{ marginTop: '250px' }}>
                <form class="ui form" id="form" onSubmit={() => this.ONSubmit(this.state.storeId)}>

                    <div className="field">
                        <label>Store</label>
                        <input onChange={this.handleChanges} value={this.state.name} name="Name" type="text" ></input>
                    </div>

                    <div className="field" >
                        <label>Address</label>
                        <input onChange={this.handleChanges} value={this.state.address} name="Address" type="text" ></input>
                    </div>
                    <button className="ui button" type="submit">Submit</button>

                </form>
            </div>
        )
    }

}