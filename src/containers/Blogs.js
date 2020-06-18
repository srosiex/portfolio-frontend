import React, { Component } from 'react'
import BlogItem from '../components/BlogItem'

export class Blogs extends Component {
    state = {
        blogs: [],
        isLoaded: false
    }

    componentDidMount(){
        fetch('http://localhost:8000/wp-json/wp/v2/blog')
        .then(res => res.json())
        .then(results => this.setState({
            blogs: results,
            isLoaded: true
        }))
        .catch(error => console.log(error))
    }

    render() {
        const { blogs, isLoaded } = this.state
        if(isLoaded){
            return (
                <div>
                    {blogs.map(blog => (
                        <BlogItem key={blog.id} blog={blog} />
                    ))}
                </div>
            )
        }

        return <h3>Loading</h3>

    }
}

export default Blogs
