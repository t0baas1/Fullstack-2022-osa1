import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total)*100
  if (total === 0) {
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(
      <table>
        <tbody>
        <tr>
          <td>
            <StatisticsLine text="good" value={good} percent=""/>
          </td>
        </tr>
        <tr>
          <td>
            <StatisticsLine text="neutral" value={neutral} percent=""/>
          </td>
        </tr>
        <tr>
          <td>
            <StatisticsLine text="bad" value={bad} percent=""/>
          </td>
        </tr>
        <tr>
          <td>
            <StatisticsLine text="all" value={total} percent=""/>
          </td>
        </tr>
        <tr>
          <td>
            <StatisticsLine text="average" value={average} percent=""/>
          </td>
        </tr>
        <tr>
          <td>
            <StatisticsLine text="positive" value={positive} percent="%"/>
          </td>
        </tr>
        </tbody>
      </table>
  )
}

const StatisticsLine = ({text, value, percent}) => {
  return(
    <p>{text} {value} {percent}</p>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
