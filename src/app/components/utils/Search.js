import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './utils.css'

export default class Search extends React.Component {
    render() {
        return (
            <div className="search-module">
                <FontAwesomeIcon icon="search" />
                <input type="search" placeholder="Search..." aria-label="Search" />
            </div>
        )
    }
}