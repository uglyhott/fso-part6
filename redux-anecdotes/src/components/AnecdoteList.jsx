import { incrementVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { clearMessage, updateMessage } from '../reducers/notificationReducer'

export const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    return state.filter ? state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter)) : state.anecdotes
  })

  const vote = (anecdote) => {
    dispatch(incrementVote(anecdote.id))
    dispatch(updateMessage(`You voted '${anecdote.content}'`))
    setTimeout(() => {
      dispatch(clearMessage())
    }, 5000)
  }

  const nextAnecdotes = [...anecdotes]
  const sortedAnecdotes = nextAnecdotes.sort((a,b) => b.votes - a.votes)

  return (
    <div>
      {sortedAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
