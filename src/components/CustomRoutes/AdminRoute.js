import React from "react";
import {Route, Redirect } from 'react-router-dom';
import { useAdminAuth } from "../Contexts/AdminAuthContext";



const AdminRoute= ({component: Component, ...rest}) =>{
    const { admin } = useAdminAuth();
    

    return ( 
    <Route
    {...rest}
    render={(props)=>{

        
            if( admin ){
                return <Component {...props} /> 
                

            }else{
              return   <Redirect to='/' />

            }
        
       

    }}>
    </Route>);
};

export default AdminRoute;