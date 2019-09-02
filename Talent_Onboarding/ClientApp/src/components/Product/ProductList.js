import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



class ProductList extends Component {





    handleEdit = async id => {
        console.log(id);
        const URL = 'https://localhost:44369/api/Products/GetProduct/' + id;
        const data = await fetch(URL, { method: 'GET' })
        const jData = await data.json();
        const result = JSON.stringify(jData);
        let path = `/Edit/${result}`;
        this.props.history.push(path);
        window.location.reload();


    }

    handleDel = DelId => {
        console.log(DelId);
        const URL = 'https://localhost:44369/api/Products/DeleteProduct/' + DelId;
        fetch(URL, { method: 'DELETE' })
        window.location.href = 'https://localhost:44369/Product';
    }



    render() {

        return (
            <div>

                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                            <th>Actions</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.list.map(x => {
                                return (
                                    <tr key={x.ProductId} >
                                        <td>{x.name}</td>
                                        <td>{x.price}</td>
                                        <td><button onClick={() => this.handleEdit(x.ProductId)} className="ui yellow button"><i className="edit icon">Edit</i></button></td>
                                        <td><button onClick={() => this.handleDel(x.ProductId)} className="ui red button" ><i className="trash alternate icon">Del</i></button></td>
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

export default withRouter(ProductList);