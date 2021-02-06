import React from "react";
import {Route, Redirect } from 'react-router-dom';
import { useAdminAuth } from "../contexts/AdminAuthContext";



const AdminRoute= ({component: Component, ...rest}) =>{
    const {admin } = useAdminAuth();
    

    return ( 
    <Route
    {...rest}
    render={(props)=>{
        return admin ? (
            <Component {...props} /> 
        ) : (
            <Redirect to='/login' />
        )

    }}>
    </Route>);
};

export default AdminRoute;