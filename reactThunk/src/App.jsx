import { useState } from 'react'

import './App.css'
import store from './Components/store'
import { fetchData, fetchUser,fetchError} from './Components/Action'
function App() {
  const [Data, setData] = useState()
store.subscribe(()=>{
  setData(store.getState().user)
})
  return (
    <>
       <button onClick={fetchData}>click hear</button>
      <ul>
        { Data && 
          
            Data.map((user) => (
              <li>
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
                <hr />
              </li>
            ))}
          
        
      </ul>
    </>
  )
}

export default App
