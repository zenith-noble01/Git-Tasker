import React from 'react'
import "./TMembers.css"

const TMembers = () => {
    return (
        <div className="tMembers">
            <div className="member__header">
                <p className="TeamName">DesignXR <i className="fa fa-chevron-down"></i></p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 dots" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
</svg>
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
