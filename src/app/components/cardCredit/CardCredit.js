import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import { CheckCircle } from '@material-ui/icons'

import CardProviderLogo from './visa.png'
import './CardCredit.css'

export default function CardCredit() {
    const [cardNumber, setCardNumber] = React.useState('4162 0222 0222 4567');

    const handleChange = event => {
        setCardNumber(event.target.value);
    };

    return (
        <div className="card-credit row">
            <div className="col-5 payment-form">
                <FormControl className="account-input">
                    <InputLabel htmlFor="component-helper">Card Number</InputLabel>
                    <Input
                        id="component-helper"
                        value={cardNumber}
                        onChange={handleChange}
                        aria-describedby="component-helper-text"
                    />
                </FormControl>

                <FormControl className="account-input">
                    <InputLabel htmlFor="component-helper">Name on Card</InputLabel>
                    <Input
                        id="component-helper"
                        value={'John Doe'}
                        onChange={handleChange}
                        aria-describedby="component-helper-text"
                    />
                </FormControl>

                <div className="input-exp-cvv row">
                    <FormControl className="account-input col-9">
                        <InputLabel htmlFor="component-helper">Expiration Date</InputLabel>
                        <Input
                            id="component-helper"
                            value={'10 / 21'}
                            onChange={handleChange}
                            aria-describedby="component-helper-text"
                        />
                    </FormControl>

                    <FormControl className="account-input col-3">
                        <InputLabel htmlFor="component-helper">CVV</InputLabel>
                        <Input
                            id="component-helper"
                            value={'345'}
                            onChange={handleChange}
                            aria-describedby="component-helper-text"
                        />
                    </FormControl>
                </div>
            </div>
            <div className="col-7 payment-card">
                <div className="show-credit-card">
                    <div className="top-card">
                        <img src={CardProviderLogo} className="img-fluid card-logo" alt="Card Provider" />
                        <CheckCircle />
                    </div>
                    <div className="middle-card">
                        <p>****  ****  ****  4567</p>
                    </div>
                    <div className="bottom-card">
                        <div className="card-holder">
                            <h6>CARD HOLDER</h6>
                            <p>John Doe</p>
                        </div>
                        <div className="card-exp">
                            <h6>EXPIRES</h6>
                            <p>10 / 21</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 