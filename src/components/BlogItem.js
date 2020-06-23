import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Card, CardTitle, Button, CardText} from 'react-mdl'

export class BlogItem extends Component {
    state = {
        imageUrl: '',
        author: '',
        isLoaded: false
    }

    static propTypes = {
        blog: PropTypes.object.isRequired
    }

    componentDidMount(){

       const {featured_media, author} = this.props.blog;
       const getImageUrl = axios.get(`http://localhost:8000/wp-json/wp/v2/media/${featured_media}`) 
       const getAuthor = axios.get(`http://localhost:8000/wp-json/wp/v2/users/${author}`) 
    
        Promise.all([getImageUrl, getAuthor])
        .then(res =>{
            this.setState({
                imageUrl: res[0].data.media_details.sizes.full.source_url,
                author: res[1].data.name,
                isLoaded: true
            })
        }
            )
    }

    render() {

        const {id, title, excerpt} = this.props.blog
        const {author, imageUrl, isLoaded} = this.state
        
        if(isLoaded){
            return (
                <div className="blog-content">
                    <Card shadow={5} style={{minWidth:'700px', margin: 'auto'}}>
                   <CardTitle><h2 style={{marginBottom: '0'}}>{title.rendered}</h2></CardTitle> 
                    <img className="blog-img" style={{width: '30%'}} src={imageUrl} alt={title.rendered} /><br />
                     <CardText>
                     <small>Blog by: <strong>{author}</strong></small>
                         <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}></div></CardText>
                    <Button><Link to={`/blog/${id}`}>View Post</Link></Button>
                    </Card>
                </div>
            )
        }
        return null
    }
}

export default BlogItem
