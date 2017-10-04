import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css'

const Wrapper = function () {
    return <MuiThemeProvider>
         <Router />
     </MuiThemeProvider>   
}

ReactDOM.render(<Wrapper />, document.getElementById('root'))
registerServiceWorker()
