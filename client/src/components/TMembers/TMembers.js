import React from 'react'
import "./TMembers.css"

const TMembers = () => {
    return (
        <div className="tMembers">
            <div className="member__header">
                <p className="TeamName">DesignXR <i className="fa fa-chevron-down"></i></p>
                <i className="fa fa-search"></i>
            </div>
            <div className="memsContent">
                <div className="member__container">
                    <div className="mems">
                        <div className="members">ZN</div>
                        <div className="members">EB</div>
                        <div className="members">ZB</div>
                        <div className="members">ZE</div>
                    </div>
                    <button><i className="fa fa-plus"></i>Invite</button>
                </div>
            </div>
        </div>
    )
}

export default TMembers
