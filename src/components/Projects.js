import React, { Component } from 'react'
import {cookbookss} from '../photos/cookbookss.png'
import projects from './projectInfo'
import ProjCard from '../containers/ProjCard'


export class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeTab: "react",
        }
    }

    projectList = (projects) => projects.map(p=> <ProjCard projects={p} />)

    handleClick = e => {
        e.preventDefault()
        this.setState({
            activeTab: e.target.value
        })
    }

    filterProj = () => {
        let filteredList = '';
        if(this.state.activeTab === 'react'){
            filteredList = projects.filter(p=>p.category==='react')
        }else if(this.state.activeTab === 'javascript'){
            filteredList = projects.filter(p=>p.category ==='javascript')
        }else if(this.state.activeTab === 'sinatra'){
            filteredList = projects.filter(p=>p.category ==='sinatra')
        }else if(this.state.activeTab === 'rails'){
            filteredList = projects.filter(p=>p.category ==='rails')
        }else if(this.state.activeTab === "all"){
            return projects
        }
        
        return filteredList
    }

    render() {
        console.log(this.state)
        return (
            <div className="projects-body">
                <h2>Projects</h2>
                <div className="category-tabs">
                       <ul className="tabs">
                       <li><button value="react" onClick={this.handleClick}>react</button></li>
                       <li><button value="javascript" onClick={this.handleClick}>javascript</button></li> 
                       <li><button value="rails" onClick={this.handleClick}>rails</button></li> 
                       <li><button value="sinatra" onClick={this.handleClick}>sinatra</button></li> 
                       <li><button value="all" onClick={this.handleClick}>all</button></li>
                       </ul>
                </div>
                    <div className="proj-card-wrapper">
                        {this.projectList(this.filterProj())}
                    </div>
                </div>

        )
    }
}

export default Projects
