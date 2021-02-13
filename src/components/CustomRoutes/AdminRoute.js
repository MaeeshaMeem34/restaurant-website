import React from "react";
import {Route, Redirect } from 'react-router-dom';
import { useAdminAuth } from "../contexts/AdminAuthContext";



const AdminRoute= ({component: Component,user, ...rest}) =>{
    //const { admin } = useAdminAuth();
    

    return ( 
    <Route
    {...rest}
    user={user}
    render={(props)=>{

        
            if( user=="admin" ){
                return <Component {...props} /> 
                

            }else{
              return   <Redirect to='/login' />

            }
        
       

    }}>
    </Route>);
};

export default AdminRoute;