import React, { Component } from 'react'
import axios from "axios";
import './Posts.css'


export default class Posts extends Component {
    state = {
        posts: [],
        isLoading: false,
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        axios.get("https://jsonplaceholder.typicode.com/photos", {
            params: {
                _limit: 15
            }
            })
            .then(response => 
                this.setState({posts: response.data, isLoading: false})
            );     
    }
    // list id of closed post when 'X' is clicked
    removeHandler = (id) => {
        const postIndex = this.state.posts.findIndex((p) => {return p.id === id;
        });
    // removed the post from the dashboard when 'X' is clicked.
        const oldArray = [...this.state.posts];
        oldArray.splice(postIndex, 1);
        this.setState({ posts: oldArray });
    };

    render() {
        if(this.state.isLoading) {
            return <p>this is it....</p>;
        }

        return (
            <div>
                <ul className="posts">{this.state.posts.map((post) => (
                        <li className="post" key={post.id}>
                            <img src={post.thumbnailUrl} alt={post.id} />
                            <h2>{post.id}{post.title}</h2>
                            <div className="remove" onClick={()=>this.removeHandler(post.id)}>
                                X
                            </div>
                        </li>
                    ))} 
                </ul>
            </div>
        )
    }
}
