import React, { Component } from 'react'
import {Grid, Tabs, Tab, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl'

export class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeTab: 0
        }
    }

    toggleCategories = () => {
        if(this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover '}}>
                        React Project 1
                    </CardTitle>
                    <CardText>asdflaksdjfa asdflaskdfalsdfj asdflkjasdkf</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Demo</Button>
                        <Button colored>Youtube</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div><h1>this is JS</h1></div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div><h1>this is rails</h1></div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div><h1>this is sinatra</h1></div>
            )
        }
    }


    render() {

        return (
            <div className="projects-body">
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                        <Tab>React</Tab>
                        <Tab>Javascript</Tab> 
                        <Tab>Rails</Tab>
                        <Tab>Sinatra</Tab>
                    </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                            {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
            </div>
        )
    }
}

export default Projects
