import React from 'react'
import CardCredit from '../components/cardCredit/CardCredit'
import { EditRounded } from '@material-ui/icons'

import '../assets/css/Payment.css'

export default class Payment extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.props = {
    //         logo: null,
    //     }
    // }

    render() {
        return (
            <div className="crn-right-col payment">
                <br />
                <div className="plan-zone">
                    <h5 className="head-text">YOUR PLAN<EditRounded /></h5>
                    <h1 id="your-plan">Free <b>trial</b></h1>
                </div>
                <br /><br /><br /><br />
                <div className="payment-zone">
                    <h5 className="head-text">PAYMENT DETAILS<EditRounded /></h5>
                    <CardCredit />
                </div>
            </div>
        );
    }
}