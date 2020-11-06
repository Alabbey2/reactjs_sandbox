import React, { Component } from 'react';

class Article extends Component {
    render() {
        
        return (
            <div className="article">
                <img 
            src="https://source.unsplash.com/weekly?water" alt="new" />
                <h2>Full Stack Web Developer program</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.
                </p>
                <p>  people like this</p>

                
                <button> Read more </button>
                <button onclick={"vote-button"}> Give a vote </button>
            </div>
        );
    }
}

export default Article;