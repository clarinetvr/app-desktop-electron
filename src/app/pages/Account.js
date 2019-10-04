import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'

import userImgDemo from '../assets/images/man.png'
import '../assets/css/Account.css'

export default function Account() {
    const [name, setName, username, email, password, linkedSocialAcc] = React.useState('John Doe');

    const handleChange = event => {
        setName(event.target.value);
    };

    return (
        <div className="crn-right-col row account-row">
            <div className="col-7 account-form">
                <FormControl className="account-input">
                    <InputLabel htmlFor="component-helper">Name</InputLabel>
                    <Input
                        id="component-helper"
                        value={name}
                        onChange={handleChange}
                        aria-describedby="component-helper-text"
                    />
                    <FormHelperText id="component-helper-text">add your name you want to show</FormHelperText>
                </FormControl>

                <FormControl className="account-input">
                    <InputLabel htmlFor="component-helper">Username</InputLabel>
                    <Input
                        id="component-helper"
                        value={username}
                        onChange={handleChange}
                        aria-describedby="component-helper-text"
                    />
                    <FormHelperText id="component-helper-text">add unique username</FormHelperText>
                </FormControl>

                <FormControl className="account-input">
                    <InputLabel htmlFor="component-helper">Email</InputLabel>
                    <Input
                        id="component-helper"
                        value={email}
                        onChange={handleChange}
                        aria-describedby="component-helper-text"
                    />
                    <FormHelperText id="component-helper-text">add youe email</FormHelperText>
                </FormControl>

                <FormControl className="account-input">
                    <InputLabel htmlFor="component-helper">Password</InputLabel>
                    <Input
                        id="component-helper"
                        value={password}
                        onChange={handleChange}
                        aria-describedby="component-helper-text"
                    />
                    <FormHelperText id="component-helper-text">add secret password</FormHelperText>
                </FormControl>

                <FormControl className="account-input">
                    <InputLabel htmlFor="component-helper">Linked Social Account</InputLabel>
                    <Input
                        id="component-helper"
                        value={linkedSocialAcc}
                        onChange={handleChange}
                        aria-describedby="component-helper-text"
                    />
                    <FormHelperText id="component-helper-text">link clarinet account with social media</FormHelperText>
                </FormControl>
            </div>
            <div className="col-3">
                <img src={userImgDemo} className="img-fluid" alt="User Img" />
            </div>

        </div>
    )
}