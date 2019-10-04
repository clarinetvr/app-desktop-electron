import React from 'react';
import CardDevice from '../components/cardDevice/CardDevice'
import DeviceImg from '../assets/images/vr-headset-icon.png'

import '../assets/css/Devices.css'

export default function Devices() {
        return(
            <div className="crn-right-col devices">
                <CardDevice deviceImg={DeviceImg} deviceName={'Oculus Rift S'} deviceStatus={'Connected'}/>
            </div>
        );
    
}