import React,{useContext, useEffect} from 'react'
import { db } from '../../Firebase';
import { PizzaContext } from '../contexts/ProductContext/PizzaContext';
import "./Pizzas.css";
import {useHistory} from 'react-router-dom';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../Navbar/UserNavbar/Navbar';

toast.configure();



const PizzaTable = ({user}) => {
    const { pizzas } = useContext(PizzaContext);
    const history = useHistory();

    const onDelete=(id)=>{
      
        db.collection("Products").doc(id).delete().then(()=>{
            console.log("item deleted successfully")
            toast.info("item deleted successfully", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
              });
            history.push('/pizzatable');

            
        })

    }


  

    

    return (
        <>
        <Navbar user={user}   />
        <div className="row justify-content-center"> 
        <div className="col-auto"> 
        <div className="table table-bordered table-striped table-hover">
            <thead className="thead-light">
                <tr>
                    <th> Name </th>
                    <th> price </th>
                    <th> description </th>
                    <th> Image </th>
                    <th> Action</th>
                </tr>
            </thead>
            <tbody>
                {pizzas.map(product => 
                 <tr key={product.ID}>
                 <td>  {product.ProductName}</td>

                <td> {product.ProductPrice} </td> 
                <td> {product.ProductDescription} </td>
                <td> {product.ProductImg} </td>
                <td> <button className="btn-danger" onClick={()=>{
                    onDelete(product.ID)
                }}>  delete</button> </td>
             </tr>

                )}

               

            </tbody>
        </div>
        </div>
        </div>

       
            
        </>
    )
}

export default PizzaTable;