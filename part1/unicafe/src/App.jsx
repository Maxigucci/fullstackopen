import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good+neutral+bad;

  //event handlers
  

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={() => {setGood(good+1); console.log(good)}}>good</button>
        <button onClick={() => setNeutral(neutral+1)}>neutral</button>
        <button onClick={() => setBad(bad+1)}>bad</button>
      </div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {((good*1)+(neutral*0)+(bad*-1))/(all||1)}</p>
      <p>positive {(good*100)/(all||1)}%</p>
    </div>
  )
}

export default App