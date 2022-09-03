const enents = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
        const event = { title: action.title, body: action.body }
        const length = state.length
        const id = length !== 0 ? state[length - 1].id + 1 : 1
      return [...state, {id, ...event}]

    case 'DELETE_EVENT':
      console.log(action)
      return state.filter(event => event.id !== action.id )

    case 'DELETE_ALL_EVENTS':
      return []
      
    default:
      return state;
  }
}

export default enents