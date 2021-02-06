import React,{useState} from 'react'
import NavAdmin from './Navbar/AdminNavbar/NavAdmin';
import AdminSidebar from './Sidebar/AdminSidebar/Sidebar';
import Sidebar from "./Sidebar/index"

const AdminDashboard = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    };
    return (
        <div
        >

            <NavAdmin toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />

            <AdminSidebar />
            
        </div>
    )
}

export default AdminDashboard;
