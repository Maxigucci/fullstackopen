import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good+neutral+bad;

  //event handlers
  const handleClick = () => {

  }
  
  const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

  const StatisticLine = ({text, value}) => <p>{text} {value}</p>

  const Statistics = ({good, neutral, bad, all}) => {
    return (
      <>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={((good*1)+(neutral*0)+(bad*-1))/(all||1)} />
        <StatisticLine text="positive" value={`${(good*100)/(all||1)}%`} />
        
      </>
    )
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={() => {setGood(good+1)}} text="good" />
        <Button onClick={() => {setNeutral(neutral+1)}} text="neutral" />
        <Button onClick={() => {setBad(bad+1)}} text="bad" />
      </div>
      <h2>statistics</h2>
      {(good || neutral || bad) ? <Statistics good={good} neutral={neutral} bad={bad} all={all} /> : <p>No feedback given</p>}
    </div>
  )
}

export default App