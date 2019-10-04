import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '@material-ui/core/Input'
import './utils.css'

export default class Search extends React.Component {
    render() {
        return (
            <div className="search-module">
                <FontAwesomeIcon icon="search" />
                <Input
                    placeholder="Search..."
                    inputProps={{
                        'aria-label': 'search field',
                    }}
                />
            </div>
        )
    }
}