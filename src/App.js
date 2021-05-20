import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {add,sub} from './Action'
function App() {
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Redux {useSelector(state=>state)}</h1>
      <button onClick={()=>dispatch(add())}>Add</button>
      <button onClick={()=>dispatch(sub())}>Decrese</button>

    </div>
  )
}

export default App
