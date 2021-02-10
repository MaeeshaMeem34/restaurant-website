import React, { useState, useEffect, useContext } from "react";

import { auth } from "./../../Firebase";

const AdminContext = React.createContext();

const useAdminAuth = () => {
  return useContext(AdminContext);
};

const AdminAuthProvider = (props) => {
  const [admin, setAdmin] = useState({});
  const [role, setRole] = useState("");
  
  

 
  const adminlogin = (email, password) => {
    
    return auth.signInWithEmailAndPassword(email, password);
  };
  const adminlogout = () => {
    return auth.signOut();
    
    
  };




  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((admin) => {
     
      setAdmin(admin);
     
      
    });
    
    return unsubscribe;
  }, []);
  return (
    <AdminContext.Provider
      value={{
        role,
        
       admin,
        adminlogin,
        adminlogout,
       
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminAuthProvider, useAdminAuth };