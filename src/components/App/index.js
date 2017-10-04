import React, {Component} from 'react'
import logo from '../../assets/logo.svg'
import './App.css'

import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {graphql, ApolloProvider} from 'react-apollo'
import gql from 'graphql-tag'

const networkInterface = createNetworkInterface({
  uri: 'https://umfquiz.herokuapp.com/graphql', //process.env.GRAPHQL_ENDPOINT, // Server URL (must be absolute)
  opts: {
    // Additional fetch() options like credentials or headers
    credentials: 'cross-origin'
  }
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

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
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Apollo</h2>
          </div>
          <QuestionListWithData />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
