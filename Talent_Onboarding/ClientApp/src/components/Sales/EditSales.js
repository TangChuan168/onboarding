import React, { Component } from 'react';


export default class EditSales extends Component {
    constructor(props) {
        super(props)

        

        this.state = {

            salesId:'',
            DateSold:'',
            nameId:'',
            productId:'',
            storeId:'',

            Cname:'',
            Pname:'',
            Sname:'',

           
            cId: [],
            pId: [],
            sId: [],
        }
        

    }

    async componentDidMount() {
        //get current info
        const NA = await this.props.match.params.result;
        //console.log(NA);
        

        
        //get customer info
        const url1 = 'https://localhost:44369/api/Customers/GetCustomer';
        const response1 = await fetch(url1);
        const result1 = await response1.json();
        //let result1 = data1.map(a => a.name);

        //get product info
        const url2 = 'https://localhost:44369/api/Products/GetProduct';
        const response2 = await fetch(url2);
        const result2 = await response2.json();


        //get store info
        const url3 = 'https://localhost:44369/api/Stores/GetStore';
        const response3 = await fetch(url3);
        const result3 = await response3.json();

        const url4 = 'https://localhost:44369/api/Sales/GetSales/' + NA;
        const response4 = await fetch(url4);
        const result4 = await response4.json();

        console.log(result4);
        this.setState({

            cId: result1,
            pId: result2,
            sId: result3,
            

            DateSold: result4.dateSold,
            salesId: result4.salesId,
            nameId: result4.customerId,
            productId: result4.productId,
            storeId: result4.storeId,

            Cname: result4.customer,
            Pname: result4.product,
            Sname: result4.store


          
        })
        //debugger
    }


    handleOnchange = event => {
        event.preventDefault();
        event.target.name === "Date" ? this.setState({ DateSold: event.target.value }) : this.setState({ DateSold: this.state.DateSold});
        event.target.name === "CustomerN" ? this.setState({ nameId: event.target.value }) : this.setState({ nameId:this.state.nameId})
        event.target.name === "ProductN" ? this.setState({ productId: event.target.value }) : this.setState({ productId: this.state.productId}); 
        event.target.name === "StoreN" ? this.setState({ storeId: event.target.value }) : this.setState({ storeId: this.state.storeId}); 

    }

    handleSubmit = async (Id) => {

        const URL = 'https://localhost:44369/api/Sales/PutSales/' + Id;
        let Sales = JSON.stringify({
            SalesId: this.state.salesId,
            CustomerId: this.state.nameId,
            ProductId: this.state.productId,
            StoreId: this.state.storeId,
            DateSold: this.state.DateSold,
        });
        console.log(Sales);
        //debugger
        const res = await fetch(URL, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: Sales })
        console.log(res);
        window.location.href = 'https://localhost:44369/Sales';
    }


    

    render() {
        return (
            <div className="ui container" style={{ marginTop: '250px' }}>
                <form class="ui form" id="form" onSubmit={()=>this.handleSubmit(this.state.salesId)} >
                    <div className="field">
                        <label>Date</label>
                        <input onChange={this.handleOnchange} value={this.state.DateSold} name="Date" type="text" ></input>
                    </div>



                    <div className="field" >
                        <label>Customer</label>
                        <select name="CustomerN" onChange={this.handleOnchange}  class="ui fluid dropdown">
                            <option value={this.state.nameId} > {this.state.Cname} </option>
                            {

                                this.state.cId.map(x => {

                                    return (<option value={x.customerId}> {x.name} </option>)

                                })
                            }
                        </select>
                    </div>

                    <div className="field" >
                        <label>Product</label>

                        <select name="ProductN" onChange={this.handleOnchange}  class="ui fluid dropdown">
                            <option value={this.state.productId}  > {this.state.Pname} </option>
                            {
                                this.state.pId.map(x => {

                                    return (<option value={x.productId}  > {x.name} </option>)

                                })

                            }
                        </select>

                    </div>

                    <div className="field" >
                        <label>Store</label>
                        <select name="StoreN" onChange={this.handleOnchange}  class="ui fluid dropdown">
                            <option value={this.state.storeId}  > {this.state.Sname} </option>
                            {
                                this.state.sId.map(x => {
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