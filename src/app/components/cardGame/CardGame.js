import React from 'react'
import './CardGame.css'
import { NotificationsActive } from '@material-ui/icons'

export default function CardGame(props) {
    const bgImg = {
        backgroundImage: `url(${props.gameImg})`
    }

    return (
        <div className="card-game" style={bgImg}>
            <h5 className="card-game-name">{props.gameName}</h5>
            <p className="card-game-des">{props.gameDes}</p>
            <button className="btn remind-btn">REMIND ME <NotificationsActive/></button>
        </div>
    )
} 
