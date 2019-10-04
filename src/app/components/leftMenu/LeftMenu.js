import React from 'react'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LeftMenu.css'

export default class LeftMenu extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.props = {
    //         logo: null,
    //     }
    // }

    boldLink = {
        fontWeight: "500",
        color: "#fff"
    }

    render() {
        return (
            <div className="crn-left-col">
                <div className="crn-logo">
                    <img src={this.props.logo} className="img-fluid" alt="Clarinet Logo" />
                </div>
                <div className="crn-main-menu">
                    <br />
                    <br />
                    <p>MENU</p>
                    <nav className="crn-list">
                        <NavLink to="/" exact className="nav-link" activeStyle={this.boldLink}><FontAwesomeIcon icon="home" /> Home</NavLink>
                        <NavLink to="/games" className="nav-link" activeStyle={this.boldLink}><FontAwesomeIcon icon="chess-knight" /> Games</NavLink>
                        <NavLink to="/devices" className="nav-link" activeStyle={this.boldLink}><FontAwesomeIcon icon="vr-cardboard" /> Devices</NavLink>
                        <NavLink to="/preference" className="nav-link" activeStyle={this.boldLink}><FontAwesomeIcon icon="sliders-h" /> Preferences</NavLink>
                    </nav>
                </div>
                <div className="crn-menu-account">
                    <br /><br />
                    <p>ACCOUNT</p>
                    <div className="crn-list">
                        <NavLink to="/account" className="nav-link" activeStyle={this.boldLink}><FontAwesomeIcon icon="user" /> My Account</NavLink>
                        <NavLink to="/payment" className="nav-link" activeStyle={this.boldLink}><FontAwesomeIcon icon="credit-card" /> Payment</NavLink>
                    </div>
                </div>
                <div className="crn-software-info">
                    <NavLink to="#" className="btn btn-danger" role="button">UPDATE SOFTWARE</NavLink>
                    <p id="show-software-ver">BETA V 0.1.1</p>
                </div>
            </div>
        );
    }
}