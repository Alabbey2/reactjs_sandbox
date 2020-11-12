import React, { Component } from 'react';

export default class Footer extends Component {
    componentDidMount(){
        // this.date=new Date().getMonth();
    }
    date(){
        const date = new Date();
        return '©' + date.getFullYear() + ' All rights reserved Abiodun Alabi';
    }
    render() {
        
        // console.log(Date.now());
        
        return (
            <div>
              <p>{this.date()}</p>  
            </div>
        );
    }
}


// const Dates = (props) => {
//     return(
//     <div><p>{props.date}</p></div>
//     )
// }
// export{Dates}