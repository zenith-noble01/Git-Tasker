import React from 'react'
import TMembers from '../TMembers/TMembers'
import "./Team.css"

const Team = () => {
    return (
        <div className="team">
            <div className="teams">
                <TMembers />
                <TMembers />
            </div>
            <button className="addTeam"><i className="fa fa-plus"></i>add new Team</button>
        </div>
    )
}

export default Team
