import React, {Component} from 'react'
import MyAwesomeReactComponent from '../../components/MaterialUi'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import QuizzView from '../../components/QuizView/'

const query = gql`
  query {
    quizz(id: 3) {
      title
      questions {
        id
        body
        answers {
          body
          correct
          position
        }
      }
    }
  }
`

const QuizzesContainer = ({data: {loading, quizz}}) => {
  if (!loading) {
    console.log('quiz', quizz)

    return <QuizzView title={quizz.title} questions={quizz.questions} />
  }

  return <h3>loading</h3>
}

export default graphql(query)(QuizzesContainer)
