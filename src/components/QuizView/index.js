import React from 'react'

export default ({title, questions, handler}) => (
  <div>
    <h3>{title}</h3>
    <ul>
      {questions.map(({body, answers}, k) => (
        <li k={k}>
          <ul>
            {body}
            {answers.map((v, ak) => (
              <li k={ak} onClick={handler}>
                {v.body}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
)
