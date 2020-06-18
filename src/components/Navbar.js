import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Layout, Header, Navigation, Drawer, Content, Link, HeaderRow, Textfield, } from 'react-mdl'

export class Navbar extends Component {
    render() {
        return (
<div  className="demo-big-content">
    <Layout fixedHeader>
        <Header className="header-color" title="Sarah Henderson" scroll>
            <Navigation>
            <NavLink to={`/`}>Home</NavLink>
            <NavLink to={`about`}>About Me</NavLink>           
            <NavLink to={`projects`}>Projects</NavLink>           
            <NavLink to={`/blog`}>Blog</NavLink>
            <NavLink to={`/resume`}>Resume</NavLink>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
        )
    }
}

export default Navbar

