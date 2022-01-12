import React from 'react'
import Menu from '../Menu/Menu'
import Sidebar from '../sidebar/Sidebar'
import "./content.css"

const Content = () => {
    return (
        <div className="content">
            <Sidebar />
            <Menu />
        </div>
    )
}

export default Content
