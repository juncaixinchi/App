import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Calculator from './components/calculator/Calculator'
import StateUpApp from './components/stateup/StateUpApp'
import Composite from './components/twostateup/Composite'
import VpStateUp from './components/vpstateup/Parent'
import MixStateUp from './components/mixstateup/Parent'
import TestFont from './components/testFont/TestFont'

// required by Material UI
injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider>
    <div>
      <div>
        <h2>Component MixStateUp</h2>
        <MixStateUp />
        <h2>Component TwoStateUpApp with Material-ui</h2>
        <Composite />
        <TestFont />
      </div>
      <div style={{ display: 'none' }}>
        <h2>Component Vpstateup</h2>
        <VpStateUp />
        <h2>Component Calculator</h2>
        <Calculator />
        <h2>Component StateUpApp</h2>
        <StateUpApp />
      </div>
    </div>
  </MuiThemeProvider>
)

const app = document.createElement('div')
document.body.appendChild(app)
ReactDOM.render(<App />, app)
