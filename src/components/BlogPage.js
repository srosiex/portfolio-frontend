import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Grid, Tabs, Tab, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl'


export class BlogPage extends Component {
    state = {
        blog: {},
        isLoaded: false,
        imageUrl: '',
        featured_media: '',
    }    

    componentDidMount(){
        axios.get(`http://localhost:8000/wp-json/wp/v2/blog/${this.props.match.params.id}`)
        .then(res => this.setState({
            blog: res.data,
            isLoaded: true,
            featured_media: res.data.featured_media, 

        }))
        .catch(e => console.log(e));

        axios.get(`http://localhost:8000/wp-json/wp/v2/media/${this.state.featured_media}`)
        .then(res => {
            this.setState({
                imageUrl: res.data[0].media_details.sizes.full.source_url
            })
        })
    }

    render() {
        const {blog, isLoaded, imageUrl} = this.state
        if(isLoaded){
            return (
                <div className="blog-content">
                    <Link to='/'>Back</Link>
                    <hr />
                    <img style={{width: '40%'}} src={imageUrl}/>
                    <h1>{blog.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{__html: blog.content.rendered}}></div>
                </div>
            )
        }
        return <h3 className="blog-content">Loading..</h3>
    }
}

export default BlogPage
