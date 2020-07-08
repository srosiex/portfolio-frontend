import React, { Component } from 'react'

export class ProjCard extends Component {
    render() {
        {console.log(this.props)}
        return (
            <div>
                <h2>Name: </h2> {this.props.name}
            </div>
        )
    }
}

export default ProjCard
