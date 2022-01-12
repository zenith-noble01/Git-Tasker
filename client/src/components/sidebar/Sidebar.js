import React from 'react'
import "./sidebar.css"
import logo from '../../images/logo.png'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <img src={logo} alt="" />
                <p>Tasker</p>
            </div>
        </div>
    )
}

export default Sidebar
