import { incrementVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

export const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    return state.filter.value ? state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter.value)) : state.anecdotes
  })

  const vote = (id) => {
    dispatch(incrementVote(id))
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
