import React from 'react'
import { Close, Remove, FilterNone } from '@material-ui/icons'
import './WindowBar.css'

// const electron = window.require("electron")

export default class WindowBar extends React.Component {

    render() {
        return(
            <div className="window-bar">
                <div id="minimize-btn" className="window-bar-btn"
                // onClick={() => electron.remote.getCurrentWindow().minimize()}
                >
                    <Remove />
                </div>
                <div id="maximize-btn" className="window-bar-btn"
                // onClick={() => electron.remote.getCurrentWindow().isMaximized() ? electron.remote.getCurrentWindow().unmaximize() : electron.remote.getCurrentWindow().maximize()}
                >
                    <FilterNone />
                </div>
                <div id="close-btn" className="window-bar-btn" 
                // onClick={() => electron.remote.app.quit()}
                >
                    <Close />
                </div>
            </div>
        )
    }
}