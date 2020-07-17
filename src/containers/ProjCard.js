import React from 'react'

const ProjCard = ({projects}) => {
        return (
            <div className="proj-card">
                <h3>{projects.name}</h3>
                <hr />
                {projects.description}
                <img src={projects.image} alt="cookbook"/>
                {projects.tech}
                <div className="proj-links">
                    <ul>
                        <li>
                            <a target="_blank" href={projects.github}>GITHUB</a>
                        </li>
                        <li>
                            <a target="_blank" href={projects.preview}>PREVIEW</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
        }
export default ProjCard
