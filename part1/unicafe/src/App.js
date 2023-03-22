import { useState } from 'react'
import "./App.css"


const StatisticLine = (props) => {
  return(
    <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.total===0) {
    return(
      <p>No feedback given.</p>
    )
  } else {  
  return (

    <p>
      <table>
        <thead>
        <th>Name</th>
        <th>Value</th>
        </thead>
        <tbody>
        <StatisticLine text ="Good: " value={props.feedback.good}/>
        <StatisticLine text ="Neutral: " value={props.feedback.neutral}/>
        <StatisticLine text ="Bad: " value={props.feedback.bad}/>
        <StatisticLine text ="Total: " value={props.total}/>
        <StatisticLine text ="Average Feedback: " value={props.average.toFixed(2)}/>
        <StatisticLine text ="Positive Feedback: " value={props.positive.toFixed(2)}/>
        </tbody>
      </table>
    </p>
  )
}
}

const Button = (props) =>{
  return(
  <button onClick={props.handler}>{props.text}</button>
  )
}

const Feedback = (props) => {
  return(
  <>
    <h1>UniCafe - Feedback</h1>
    <Button text="Good" handler={props.goodClick} />
    <Button text="Neutral" handler={props.neutralClick} />
    <Button text="Bad" handler={props.badClick} />
    <h3>Feedback Statistics:</h3>
  </>
  )
}


const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, bad: 0, neutral: 0 })
  const [total, setTotal] = useState(0)
  const [average, setScore] = useState(0)
  const [positive, setPositive] = useState(0)

  const goodClick = () => {
    const updatedgood = feedback.good + 1
    setFeedback({ ...feedback, good: updatedgood })
    const total_added = updatedgood + feedback.neutral + feedback.bad
    setTotal(total_added)
    setScore((updatedgood + feedback.neutral * 0 + feedback.bad * -1) / total_added)
    setPositive(updatedgood / total_added)
  }

  const neutralClick = () => {
    const updatedneutral = feedback.neutral + 1
    setFeedback({ ...feedback, neutral: updatedneutral })
    const total_added = feedback.good + updatedneutral + feedback.bad
    setTotal(total_added)
    setScore((feedback.good + updatedneutral * 0 + feedback.bad * -1) / total_added)
    setPositive(feedback.good / total_added)

  }

  const badClick = () => {
    const updatedbad = feedback.bad + 1
    setFeedback({ ...feedback, bad: updatedbad })
    const total_added = feedback.good + feedback.neutral + updatedbad
    setTotal(total_added)
    setScore((feedback.good + feedback.neutral * 0 + updatedbad * -1) / total_added)
    setPositive(feedback.good / total_added)
  }

  return (
    <div>
      <Feedback goodClick={goodClick} neutralClick={neutralClick} badClick={badClick} />
      <Statistics feedback={feedback} total={total} average={average} positive={positive}/>
    </div>
  )
}

export default App
