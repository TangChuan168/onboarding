
import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { BrowserRouter } from 'react-router-dom';
//customer
import CustomerAPP from './components/Customers/CustomerAPP';
import NewCustomer from './components/Customers/NewCustomer';
import Edit from './components/Customers/Edit';
//product
import Product from './components/Product/Product';
import NewProduct from './components/Product/NewProduct';
import EditProduct from './components/Product/EditProduct';
//sales
import Sales from './components/Sales/Sales';
import NewSales from './components/Sales/NewSales';
import EditSales from './components/Sales/EditSales';
//store
import Store from './components/Store/Store';
import NewStore from './components/Store/NewStore';
import EditStore from './components/Store/EditStore';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/CustomerAPP' component={CustomerAPP} />
                    <Route path='/Product' component={Product} />
                    <Route path='/Sales' component={Sales} />
                    <Route path='/Store' component={Store} />
                </Layout>

                <Route path='/NewCustomer' component={NewCustomer} />
                <BrowserRouter>
                    <Route path='/Edit/:result' component={Edit} />
                </BrowserRouter>

                <Route path='/NewProduct' component={NewProduct} />
                <BrowserRouter>
                    <Route path='/EditProduct/:result' component={EditProduct} />
                </BrowserRouter>

                <Route path='/NewSales' component={NewSales} />
                <BrowserRouter>
                    <Route path='/EditSales/:result' component={EditSales} />
                </BrowserRouter>

                <Route path='/NewStore' component={NewStore} />
                <BrowserRouter>
                    <Route path='/EditStore/:result' component={EditStore} />
                </BrowserRouter>
            </div>
        );
    }
}
