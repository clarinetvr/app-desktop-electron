import React from 'react'
import './UserNav.css'

import userImg from './man.png'

export default class UserNav extends React.Component {
    render() {
        return (
            <div className="user-module">
                <h6 id="show-username">John Doe</h6>
                <img id="show-user-img" src={userImg} alt="User Img" />
            </div>
        )
    }
}