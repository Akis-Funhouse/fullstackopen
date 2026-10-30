// 1.6, 1.7, 1.8

import { useState } from 'react'

const Statistics = (props) => {
return (
  <div>
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>

    <p>all: {props.all}</p>
    <p>Average: {props.average}</p>
    <p>Positive: {props.positive} %</p>
  </div>
)
}

const App = () => {

 const [good, setGood] = useState(0)
 const [neutral, setNeutral] = useState(0)
 const [bad, setBad] = useState(0)

 const all = good + neutral + bad

 const average = (good - bad) / all
 const positive = good / all * 100

  return (
    <div>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad+ 1)}>Bad</button>

      <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}
      average={average}
      positive={positive}
       />
    </div>
  )
}

export default App