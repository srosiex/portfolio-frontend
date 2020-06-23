import React, { Component } from 'react'
import {Grid, Cell, List,ListItem, ListItemContent} from 'react-mdl'

export class About extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Sarah Henderson</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="img" style={{height:'250px'}} />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>asdfasdfsdfasdfasdfsdfasdfasdfasdfasdfasdfasdf asdfadsfasdf asdfasdfsdf</p>    
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                        <List>
                         <ListItem>
                          <ListItemContent style={{fontSize: '25px'}} icon="person">Bryan Cranston</ListItemContent>
                        </ListItem>
                         <ListItem>
                             <ListItemContent icon="person">Aaron Paul</ListItemContent>
                         </ListItem>
                         <ListItem>
                             <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                         </ListItem>
                        </List></div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About
