import { useReducer } from "react"
import reducer from '../reducers'
import Events from "./Events"
import AppContext from "../contexts/AppContext"
import EventForm from "./EventForm"


const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
      <EventForm />
      <Events />
      </div>
    </AppContext.Provider>
  )
}

export default App;