import React from 'react'
import "./bar.css"

const Bar = () => {
    return (
        <div className="bar">
            <div className="left__bar"></div>
            <div className="right__bar">
                <div className="right_search">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Search" />
                </div>
                <button className="fa fa-plus">Add new</button>
            </div>
        </div>
    )
}

export default Bar
