import React from 'react'
import SimpleBar from 'simplebar-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { Home, Games, Devices, Preference, Account, Payment } from './pages'
import LeftMenu from './components/leftMenu/LeftMenu'
import Header from './components/header/Header'
import WindowBar from './components/windowBar/WindowBar'

import 'simplebar/dist/simplebar.min.css'
import './assets/scss/custom.scss' //bootstrap

import ClarinetLogo from './assets/images/clarinet-logo.png'

import { faHome, faChessKnight, faVrCardboard, faSlidersH, faUser, faCreditCard, faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faChessKnight, faVrCardboard, faSlidersH, faUser, faCreditCard, faSearch)

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Montserrat"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

function ClarinetApp() {
  return (
    <ThemeProvider theme={theme}>
      <div className="row crn-row">
        <Router>
          <div className="col-3 left">
            <LeftMenu logo={ClarinetLogo} />
          </div>
          <div className="col right">
            <WindowBar />
            <Header />
            <SimpleBar style={{ height: '100vh' }}>
              <Route path="/" exact component={Home} />
              <Route path="/games" component={Games} />
              <Route path="/devices" component={Devices} />
              <Route path="/preference" component={Preference} />
              <Route path="/account" component={Account} />
              <Route path="/payment" component={Payment} />
            </SimpleBar>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default ClarinetApp;
