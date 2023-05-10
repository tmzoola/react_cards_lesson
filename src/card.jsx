import React from "react";
import './card.css'


class Card extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="title">
                    <h3 >{this.props?.title}</h3>
                </div>
            </div>
        )
    }
}
export default Card