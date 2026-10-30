// 1.6, 1.7, 1.8, 1.9

import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
  )
}



const Statistics = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good" value={props.good} />
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="Bad" value={props.bad} />
          <StatisticLine text="All" value={props.all} />
          <StatisticLine text="Average" value={props.average} />
          <StatisticLine text="Positive" value={`${props.positive} %`}
          />
        </tbody>
      </table>
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
      <div>
        <h1>Give Feedback</h1>
      </div>

      <div>
      <Button
      handleClick={() => setGood(good + 1)}
      text="good"
      />
      <Button
      handleClick={() => setNeutral(neutral + 1)}
      text="neutral"
      />
      <Button
      handleClick={() => setBad(bad + 1)}
      text="bad"
      />
      </div>

      <div>
        <h1>Statistics</h1>
      </div>

      <div>
      {all === 0
      ? <p>No feedback given</p>
      : <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}
      average={average}
      positive={positive}
       />
      }
      </div>
    </div>
  )
}

export default App