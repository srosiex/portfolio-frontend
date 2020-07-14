import React from 'react'

const ProjCard = ({projects}) => {
        return (
            <div className="proj-card">
                <h3>{projects.name}</h3>
                <hr />
                {projects.description}
                <img src={projects.image} alt="cookbook"/>
                {projects.tech}
            </div>
        )
        }
export default ProjCard
