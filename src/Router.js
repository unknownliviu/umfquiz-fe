// src/routes.js
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Quizzes from './pages/Quizzes'
import WizardForm from './components/WizardForm'

const Routes = props => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/wizard" component={WizardForm}/>
        <Route path="/quizzes" component={Quizzes} />        
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Routes
