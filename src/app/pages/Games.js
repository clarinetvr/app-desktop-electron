import React from 'react'
import HeadGamePage from '../components/headGamePage/HeadGamePage'
import CardGame from '../components/cardGame/CardGame'

import gameBackground from '../assets/images/GamePage/overwatch-game-page.png'
import GameImg1 from '../assets/images/GamePage/paladins.png'
import GameImg2 from '../assets/images/GamePage/gta-v.png'
import GameImg3 from '../assets/images/GamePage/csgo.png'
import GameImg4 from '../assets/images/GamePage/fortnite.png'

import '../assets/css/Games.css'

export default class Games extends React.Component {
    render() {
        return (
            <div className="crn-right-col game">
                <HeadGamePage background={gameBackground}/>
                <div className="list-game">
                    <h6 className="head-text">COMING SOON</h6>
                    <div className="list-card row">
                        <CardGame gameName={'PALADINS'} gameDes={'Not Available now'} gameImg={GameImg1}/>
                        <CardGame gameName={'GTA V'} gameDes={'Not Available now'} gameImg={GameImg2}/>
                        <CardGame gameName={'CS:GO'} gameDes={'Not Available now'} gameImg={GameImg3}/>
                        <CardGame gameName={'FORTNITE'} gameDes={'Not Available now'} gameImg={GameImg4}/>
                    </div>
                </div>
            </div>
        )
    }
}