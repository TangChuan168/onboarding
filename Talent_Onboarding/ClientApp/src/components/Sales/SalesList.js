import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



class SalesList extends Component {

     /*
    componentDidMount() {
        let saleData = this.props.list.map(x => new{
            x.customer,
            x.product,
            x.salesidet,
            x.store,
            x.date,
        });
        console.log(saleData);
        
        customerName = x.customer,
            productName = x.product,
            salesId = x.salesidet,
            storeName = x.store,
            dateSold = x.date,
        */
    

    //x.salesidet, x.customer, x.product, x.store, x.date
    handleEdit = (id) => {
        let jData =  id ;
        //jData.push(id);
        
      
        //const result = JSON.stringify(jData);
        let path = `/EditSales/${jData}`;
        this.props.history.push(path);
        window.location.reload();


    }

    handleDel = DelId => {
        console.log(DelId);
        const URL = 'https://localhost:44369/api/Sales/DeleteSales/' + DelId;
        fetch(URL, { method: 'DELETE' })
        window.location.href = 'https://localhost:44369/Sales';
    }



    render() {

        return (
            <div>

                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Store</th>
                            <th>Date Sold</th>
                            <th>Actions</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                                                
                    <tbody>
                        {
                            this.props.list.map(x => {
                                return (
                                    <tr >
                                        <td>{x.customer}</td>
                                        <td>{x.product}</td>
                                        <td>{x.store}</td>                                      
                                        <td>{x.dateSold}</td>
                                        <td><button onClick={() => this.handleEdit(x.salesId)} className="ui yellow button"><i className="edit icon">Edit</i></button></td>
                                        <td><button onClick={() => this.handleDel(x.salesId)} className="ui red button" ><i className="trash alternate icon">Del</i></button></td>
                                       
                                    </tr>
                                );
                            })
                        }
                    </tbody>

                                                                           
                </table>
            </div>
        )
    }

}//f

export default withRouter(SalesList);