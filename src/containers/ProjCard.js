import React from 'react'
import cookbook from '../photos/cookbookss.png'

const ProjCard = ({projects}) => {
        return (
            <div className="proj-card-wrapper">
            <div className="proj-card">
                <h3>{projects.name}</h3>
                <hr />
                {projects.description}
                <img src={cookbook} alt="cookbook"/>
                {projects.tech}
            </div>
            </div>
        )
        }

export default ProjCard
