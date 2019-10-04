import React from 'react'
import './HeadGamePage.css'

export default function HeadGamePage(props) {
    return (
        <div className="head-game-page">
            <img src={props.background} alt="Game Background" />
            <h1 className="game-name">Overwatch</h1>
            <p className="game-des">Join the fight for the future in the ultimate team-based shooter.<br /><b>Available now on VR!</b></p>
            <div className="game-option">
                <button className="btn btn-danger btn-install">INSTALL GAME</button>
            </div>
        </div>
    )
}