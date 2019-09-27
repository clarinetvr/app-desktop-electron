import React from 'react'
import { Search } from '../utils'
import UserNav from '../userNav/UserNav'

import './Header.css'

export default class Header extends React.Component {
    render() {
        return (
            <div className="row nav-bar-row">
                <Search />
                <UserNav />
            </div>
        )
    }
}