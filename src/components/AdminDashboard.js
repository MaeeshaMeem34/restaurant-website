import React,{useState} from 'react'

import Navbar from './Navbar/UserNavbar/Navbar';
import AdminSidebar from './Sidebar/AdminSidebar/Sidebar';
import Sidebar from "./Sidebar/index"

const AdminDashboard = ({user}) => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    };
    return (
        <div
        >

            <Navbar user={user} toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />

            <AdminSidebar />
            
        </div>
    )
}

export default AdminDashboard;
