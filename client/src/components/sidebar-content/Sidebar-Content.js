import React from 'react'
import "./Sidebar-Content.css"

const Sidebar__Content = () => {
    return (
        <ul className="sidebarContent">
            <li><i className="fa fa-home"></i>Home</li>
            <li><i className="fab fa-messages"></i>My Tasks</li>
            <li><i className="fab fa-messages"></i>Messages</li>
            <li><i className="fas fa-bell"></i>Notification</li>
            <li><i className="fa fa-chart-pie"></i>Reporting</li>
            <li><i className="fa fa-home"></i>Portfolio</li>
        </ul>
    )
}

export default Sidebar__Content
