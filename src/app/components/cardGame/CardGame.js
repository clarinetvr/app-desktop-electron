import React from 'react'
import './CardGame.css'

export default class CardGame extends React.Component {
    render() {
        return(
            <div className="card-game">
                <img src={this.props.img} className="img-fluid" alt="Game Card" />
            </div>
        )
    }
} 
