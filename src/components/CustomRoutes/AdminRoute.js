import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      user={user}
      render={(props) => {
        if (user == "admin") {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    ></Route>
  );
};

export default AdminRoute;
