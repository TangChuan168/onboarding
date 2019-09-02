import React,{ Component } from 'react';


export default class Edit extends Component {
    constructor(props) {
        super(props)

        const NA = this.props.match.params.result;
        const data = JSON.parse(NA);
        this.state = {
            customerId: data.customerId,
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
            address: CA,
        });
    }

    ONSubmit = async (Id) => {
       
        const URL = 'https://localhost:44369/api/Customers/PutCustomer/' + Id;
        let Customers = JSON.stringify({
            CustomerId:this.state.customerId,
            Name: this.state.name,
            Address: this.state.address,
        });
        await fetch(URL, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: Customers })
        
        window.location.href = 'https://localhost:44369/CustomerAPP';
    }


  

    render() {


        return (
            <div className="ui container" style={{ marginTop: '250px' }}>
                <form class="ui form" id="form" onSubmit={()=>this.ONSubmit(this.state.customerId)}>
                    
                    <div className="field">
                        <label>Name</label>
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




 