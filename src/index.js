import React from 'react'
import {render} from 'react-dom'
import Router from './Router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './index.css'
import store from './store'
import {ApolloProvider} from 'react-apollo'
import client from './apollo'

const target = document.querySelector('#root')

render(
  <MuiThemeProvider>
    <ApolloProvider store={store} client={client}>
      <Router />
    </ApolloProvider>
  </MuiThemeProvider>,
  target
)
