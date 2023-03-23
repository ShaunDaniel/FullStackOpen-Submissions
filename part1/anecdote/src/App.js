import { useState } from 'react'
import './App.css'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [top_index, setTopVoted] = useState(0)
  const [selected, setSelected] = useState(0)
  const [dnvotes, setDnVote] = useState(new Array(8).fill(0))
  const [upvotes, setUpVote] = useState(new Array(8).fill(0))

  const DnvoteCopy = [...dnvotes]
  DnvoteCopy[selected] = DnvoteCopy[selected] + 1
  const UpvoteCopy = [...upvotes]
  UpvoteCopy[selected] = UpvoteCopy[selected] + 1

  const putUpVote = () => {
    setUpVote(UpvoteCopy)
    setTopVoted(UpvoteCopy.indexOf(Math.max(...UpvoteCopy)))
  }

  const putDnVote = () => setDnVote(DnvoteCopy)

  const generateNew = () => {
    setSelected(Math.ceil(Math.random() * 7))
  }




  // For debugging errors
  // console.log(selected)
  // console.log("Upvotes:", upvotes)
  // console.log("Downvotes:", dnvotes)
  // console.log(Math.max(...upvotes))

  const AnecdoteOTD = (props) => {
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <p>{props.anecdote}</p>
      </div>
    )
  }

  const TopAnecdote = (props) => {
    console.log(props.top_index)
    return (
      <>
        <h3>Today's most upvoted Anecdote : </h3>
        <p>{props.anecdotes[props.top_index]}
        <br />
        <br />
        {upvotes[top_index]} upvotes.</p>
      </>
    )
  }

  const Voting = (props) => {

    return (
      <div>
        <p>{upvotes[selected]} upvotes. {dnvotes[selected]} downvotes.</p>
        <br />
        <button onClick={putUpVote}>👍</button>
        <button onClick={putDnVote}>👎</button>
        <br /><br />
        <button onClick={generateNew}>Next Anecdote</button>
      </div>
    )
  }

  return (
    <>
      <AnecdoteOTD anecdote={anecdotes[selected]} />
      <Voting putUpVote={putUpVote} putDnVote={putDnVote} generateNew={generateNew} />
      <TopAnecdote anecdotes={anecdotes} top_index={top_index} upvotes={upvotes} />
    </>
  )
}

export default App