import React, { Component } from 'react'

const ProjCard = ({projects}) => {
        return (
            <div>
                <h3>Name: </h3> {projects.name}
                <h3>Category: </h3> {projects.category}

            </div>
        )
        }

export default ProjCard
