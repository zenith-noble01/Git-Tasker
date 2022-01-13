import React from 'react'
import "./sidebar.css"
import logo from '../../images/logo.png'
import Sidebar__Content from '../sidebar-content/Sidebar-Content'
import MidContent from '../midContent/MidContent'
import SFooter from '../SFooter/SFooter'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <img src={logo} alt="" />
                <p>Tasker</p>
            </div>
            <Sidebar__Content />
            <MidContent />
            <SFooter />
        </div>
    )
}

export default Sidebar
