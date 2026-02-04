import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const newAnecdote = asObject(action.payload)
      state.push(newAnecdote)
    },
    incrementVote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(n => n.id === id)
      const updatedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => (anecdote.id !== id ? anecdote : updatedAnecdote))
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, incrementVote, setAnecdotes } = anecdotesSlice.actions
export default anecdotesSlice.reducer
