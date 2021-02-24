import React,{useContext, useEffect, useState} from 'react'
import { db } from '../../Firebase';
import { PizzaContext } from '../contexts/ProductContext/PizzaContext';
import "./Pizzas.css";
import {useHistory} from 'react-router-dom';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../Navbar/UserNavbar/Navbar';
import Sidebar from '../Sidebar';

toast.configure();



const PizzaTable = ({user,props}) => {
    const { pizzas } = useContext(PizzaContext);
    const history = useHistory();

    const onDelete=(id)=>{
      
        db.collection("Products").doc(id).delete().then(()=>{
            history.push('/pizzatable');
            console.log("item deleted successfully")
            toast.info("item deleted successfully", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
              });
            

            
        })

    }

    const [isOpen,setIsOpen] = useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    };


  

    

    return (
        <>
        <Navbar user={user} toggle={toggle}  />
        <Sidebar isOpen={isOpen} toggle={toggle}/>
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
                }}>  Delete</button> </td>
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