import React, { Component } from 'react'

export class ProjCard extends Component {
    render() {
        return (
            <div>
                <h2>Name: {this.props.name}</h2>
            </div>
        )
    }
}

export default ProjCard
