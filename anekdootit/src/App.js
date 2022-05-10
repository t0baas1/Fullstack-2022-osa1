import { useState } from 'react'


const Button = (props) => (
  <button onClick={(props.handleClick)}>
    {props.text}
  </button>
)

const Anecdote = (props) => {
  return(
    <div>
      <p>{props.anecdotes[props.selected]}</p>
      <p>has {props.votes[props.selected]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  let points = Array(7).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)

  const setToValue = () => {
    const newValue = Math.floor(Math.random()*7)
    console.log(newValue)
    setSelected(newValue)
  }

  const setVote = () => {
    console.log(selected)
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const getLargest = (votes) => {
    let largest = votes[0]
    let index = 0

    for (let i = 0; i < votes.length; i++)
      if(largest < votes[i]){
        largest = votes[i]
        index = i
      }
    
    return index
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes} selected={selected} votes={votes} />
      <Button handleClick={() => setVote()} text="vote"/>
      <Button handleClick={() => setToValue()} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[getLargest(votes)]}</p>
    </div>
  )

}

export default App;
