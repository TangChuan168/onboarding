import React, { Component } from 'react';

class SubSales extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Date: '', //new Date()
            cId: '',  
            pId: '',
            sId: '',

        }
    }


    //update selected info to state
    handleOnchange = event => {
        event.preventDefault();
        event.target.name === "Date" ? this.setState({ Date: event.target.value}): new Date();
        event.target.name === "CustomerN" ? this.setState({ cId: event.target.value }) : 'null';
        event.target.name === "ProductN" ? this.setState({ pId: event.target.value }) : 'null';
        event.target.name === "StoreN" ? this.setState({ sId: event.target.value }) : 'null';

    }
    
    //update new sales to database
    handleSubmit = event => {
        event.preventDefault();
        console.log(' start to add Product');
        const URL = 'https://localhost:44369/api/Sales/PostSales';
        let Sales = JSON.stringify({
            DateSold:this.state.Date,
            CustomerId: this.state.cId,
            ProductId: this.state.pId,
            StoreId: this.state.sId,
        });
        console.log(Sales);

        const data=fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: Sales
        });
        console.log(data);
        window.location.href = 'https://localhost:44369/Sales';

    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '250px' }}>
                <form class="ui form" id="form" onSubmit={this.handleSubmit} >
                    <div className="field">
                        <label>Date</label>
                        <input onChange={this.handleOnchange} value={this.state.Date} placeholder={"MM/dd/yyyy"} name="Date" type="text" ></input>
                    </div>



                    <div className="field" >
                        <label>Customer</label>
                        <select name="CustomerN" onChange={this.handleOnchange}   class="ui fluid dropdown">
                            <option>Select Customer </option>
                            {

                                this.props.CustomerN.map(x => {

                                    return (<option value={x.customerId}> { x.name } </option>)

                                })
                            }
                        </select>
                    </div>
                    
                    <div className="field" >
                        <label>Product</label>
                        
                        <select name="ProductN" onChange={this.handleOnchange}  class="ui fluid dropdown">
                            <option>Select Product </option>
                            { 
                                this.props.ProductN.map(x => {
                              
                                    return (<option value={x.productId}  > {x.name} </option> )
                                 
                                })
                                
                            }
                        </select>
                       
                    </div>
                    
                    <div className="field" >
                        <label>Store</label>
                        <select name="StoreN" onChange={this.handleOnchange}  class="ui fluid dropdown">
                            <option>Select Store </option>
                            {
                                this.props.StoreN.map(x => {
                                    return (<option value={x.storeId} > {x.name} </option>)                                
                                })
                            }
                        </select>
                    </div>
                    

                    <button className="ui button" type="submit">Submit</button>

                </form>
            </div>
            )//render
    }
}

export default SubSales