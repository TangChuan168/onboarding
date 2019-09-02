import React, { Component } from 'react';
import SubSales from './SubSales';

class NewSales extends Component {
   
   constructor() {
       super();
       this.state = {
         
           CN:[],
           PN:[],
           SN:[],
       };

   }
  
   async componentDidMount() {
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
          

       this.setState({
           CN: result1,
           PN: result2,
           SN: result3
       })
       console.log(this.state.CN);

   }
   
    
    render() {
        return (
            <SubSales CustomerN={this.state.CN} ProductN={this.state.PN} StoreN={this.state.SN} />

        )
    }
}

export default NewSales;