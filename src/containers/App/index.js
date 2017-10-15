import React, {Component} from 'react'
// import './App.css'
import MyAwesomeReactComponent from '../../components/MaterialUi'

import {graphql} from 'react-apollo'

import gql from 'graphql-tag'

const QuestionList = ({data: {loading, error, questions}}) => {
  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }
  return <ul>{questions.map(ch => <li key={ch.id}>{ch.body}</li>)}</ul>
}

const QuestionListQuery = gql`
  {
    questions {
      id
      body
    }
  }
`

const QuestionListWithData = graphql(QuestionListQuery)(QuestionList)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>UMFQuizz app</h2>
        </div>
        <QuestionListWithData />
        <MyAwesomeReactComponent />
      </div>
    )
  }
}

export default App
