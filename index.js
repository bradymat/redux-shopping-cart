import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { createStore } from 'redux'


const initialState = {
  items: []
}

function reducer (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(reducer)
const rootEl = document.querySelector('main')

const render = () => {
    console.log('logging state', store.getState())
    ReactDOM.render(
      <App store={store}/>,
      rootEl
  )
}

render()
store.subscribe(render)
