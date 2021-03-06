import React, { useState, useEffect, useContext } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { auth } from "../../Firebase";

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };


 
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const logout = () => {
    return auth.signOut();
  };




  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider
      value={{
        
        currentUser,
        signup,
        login,
        logout,
       
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
