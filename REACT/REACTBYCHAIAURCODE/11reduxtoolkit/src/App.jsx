import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
// Key Concepts of Redux Toolkit
// Store Setup with configureStore
// State Slices with createSlice
// Asynchronous Calls with createAsyncThunk
// Using Redux in Components with Hooks (useSelector, useDispatch)

function App() {

  return (
    <>
      <h1 className='text-3xl text-blue-400'>REDUX TOOLKIT SIKHTE HAI</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
