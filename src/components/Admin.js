import React,{useState} from 'react'
import { useAdminAuth } from './Contexts/AdminAuthContext';
import { Button,  } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import AdminHero from './Hero/AdminHero';

const Admin = () => {

    const {adminlogout} = useAdminAuth();
    const [error, setError] = useState("");
    const history = useHistory();

    const handleLogout = async () => {
        setError("");
        try {
          await adminlogout().then(() => {
            history.push("/dashboard");
          });
        } catch (error) {
          setError(error);
        }
      };
    return (
        <div>
            <AdminHero/>

            <div className="w-100 text-center mt-2">
          <Button variant="Link" onClick={handleLogout}>
            {" "}
            Log Out{" "}
          </Button>
        </div>
            
        </div>
    )
}

export default Admin;