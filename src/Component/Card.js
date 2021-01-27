import React, {Component} from 'react';
import './Card.css';
class Card extends Component{
    render(){
        return <div className='card'>
                    <img src={this.props.img} alt={this.props.name} title={this.props.name} />
                    <p id='p1' >{this.props.name}</p>
                    <p id='p2' title="Color">{this.props.color}</p>
                    <p id='p3' title="Growth Rate">{this.props.growthRate}</p>
                </div>
    }
} 

export default Card;