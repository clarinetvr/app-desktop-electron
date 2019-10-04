import React from 'react';
import { CheckCircle, Add } from '@material-ui/icons'

import './CardDevice.css'

export default function CardDevice(props) {
    return (
        <div className="card-device">
            <div className="show-device">
                <img src={props.deviceImg} alt='Show Device Img' />
                <div className="des-device">
                    <h3 className="name-device">{props.deviceName} <CheckCircle /></h3>
                    <p className="status-device">{props.deviceStatus}</p>
                </div>
            </div>
            <div className="add-device">
                <button className="btn add-device-btn">add device <Add/></button>
            </div>
        </div>
    )
}