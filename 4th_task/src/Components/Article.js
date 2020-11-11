import React, { Component } from 'react';

class Article extends Component {
    state = {
        vote: 0,
    };
    addVoteHandler = () => {
        this.setState({
            vote: this.state.vote + 1,
        });
    };
    readmoreHandler = () => {
        console.log("hi!");
    };
    render() {
        
        return (
            <div className="article">
                <img 
            src="https://source.unsplash.com/weekly?office" alt="new" />
                <h2>Full Stack Web Developer program</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.
                </p>
                <p> {this.state.vote} people like this</p>

                
                <button onClick={this.readmoreHandler}> Read more </button>
                <button onClick={this.addVoteHandler}> Give a vote </button>
            </div>
        );
    }
}

export default Article;