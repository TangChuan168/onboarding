import React, { Component } from 'react';
//import { browserHistory } from 'react-router';
import { withRouter } from 'react-router-dom';



class CustomerList extends Component {
    constructor(props) {
        super(props)
        const tt = this.props.list.map(x => x.name);
        console.log(tt);
        this.state = {
            delete: '',
            customers:'',
        }
        
    }

 

    

    handleEdit = async id => {
        console.log(id);
        const URL = 'https://localhost:44369/api/Customers/GetCustomer/' + id;
        const data = await fetch(URL, { method: 'GET' })
        const jData = await data.json();
        const result = JSON.stringify(jData);
        //this.setState({ customers: jData });
        let path = `/Edit/${result}`;
        this.props.history.push(path);
        window.location.reload();

        
    }

    handleDel = DelId => {
        console.log(DelId);
        const URL = 'https://localhost:44369/api/Customers/DeleteCustomer/' + DelId;
        fetch(URL, { method: 'DELETE' })
        window.location.href = 'https://localhost:44369/CustomerAPP';
    }



    render() {
       
        return (
            <div>
                
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                        <th>Actions</th>
                      
                    </tr>
                </thead>

                <tbody>
                        {
                            this.props.list.map(x => {
                                return (
                                    <tr key={x.customerId} >
                                        <td>{x.name}</td>
                                        <td>{x.address}</td>
                                        <td><button onClick={() => this.handleEdit(x.customerId)} className="ui yellow button"><i className="edit icon">Edit</i></button></td>
                                        <td><button onClick={() => this.handleDel(x.customerId)} className="ui red button" ><i className="trash alternate icon">Del</i></button></td>
                                    </tr>
                                );
                            })
                        }
                </tbody>
             </table>
             </div>
)} 
 
 }//f
 
export default withRouter(CustomerList);